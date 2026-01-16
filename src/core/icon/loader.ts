import { InvalidVariantError } from "@/core/errors";
import { IconNotFoundError } from "@/core/errors/IconNotFoundError";
import type { ErrorInfo } from "@/core/errors/types";
import { parseSVGDocument } from "@/core/svg/parser";
import type { SVGElementType } from "@/core/svg/types";
import { calculateDimensions } from "@/utils/dimensions";
import { createErrorFallback } from "@/utils/fallback";
import { buildFileName } from "./builder";
import { resolveIcon } from "./resolver";

type LoadIconParams = {
	name: string;
	variant?: string;
	weight?: string;
	width?: number;
	height?: number;
	showErrorIcon?: boolean;
};

type LoadIconResult = {
	attributes: Record<string, string>;
	children: SVGElementType[];
	error?: ErrorInfo;
};

// ALTERAÇÃO IMPORTANTE: Carrega os ícones da pasta icons
const svgModules = import.meta.glob("../../icons/**/*.svg", {
	eager: true,
	query: "?url",
	import: "default",
}) as Record<string, string>;

/**
 * Função auxiliar para tentar carregar o arquivo de fallback.svg
 */
async function loadFallbackFile(
	width: number,
	height: number,
	originalError: ErrorInfo,
): Promise<LoadIconResult> {
	const fallbackPath = "../../icons/fallback.svg";
	const fallbackUrl = svgModules[fallbackPath];

	// Tenta carregar o arquivo físico de fallback
	if (fallbackUrl) {
		try {
			const response = await fetch(fallbackUrl);
			if (response.ok) {
				const content = await response.text();
				const { element, viewBox, originalWidth, originalHeight } =
					parseSVGDocument(content);

				const { width: finalWidth, height: finalHeight } = calculateDimensions(
					{ width: originalWidth, height: originalHeight },
					{ width, height },
				);

				return {
					attributes: {
						width: finalWidth.toString(),
						height: finalHeight.toString(),
						viewBox: viewBox || `0 0 ${originalWidth} ${originalHeight}`,
					},
					children: element.children || [],
					error: originalError,
				};
			}
		} catch (e) {
			console.warn("[BvIcon] Failed to load fallback.svg file:", e);
		}
	}

	// Se falhar, usa o fallback gerado via código (utils/fallback)
	return {
		...createErrorFallback(width, height),
		error: originalError,
	};
}

export async function loadSvg(params: LoadIconParams): Promise<LoadIconResult> {
	const { name, variant, weight, width, height } = params;

	const fallbackWidth = width ?? height ?? 32;
	const fallbackHeight = height ?? width ?? 32;

	try {
		// 1. Resolver o ícone
		const resolved = resolveIcon(name, { variant, weight });

		// 2. Construir caminho
		const fileName = buildFileName(resolved.icon.id, resolved.appliedVariants.weight);
		const folderName = resolved.appliedVariants.variant;
		const svgPath = `../../icons/${folderName}/${fileName}`;
		const svgUrl = svgModules[svgPath];

		if (!svgUrl) {
			const error: ErrorInfo = {
				type: "fetch-failed",
				message: "Icon file not found in modules",
				details: `Path: ${svgPath}`,
			};
			return await loadFallbackFile(fallbackWidth, fallbackHeight, error);
		}

		// 3. Fetch
		const response = await fetch(svgUrl);

		if (!response.ok) {
			const error: ErrorInfo = {
				type: "fetch-failed",
				message: "Failed to fetch SVG",
				details: `Status: ${response.status}`,
			};
			return await loadFallbackFile(fallbackWidth, fallbackHeight, error);
		}

		// 4. Parse (Sucesso)
		const content = await response.text();
		const { element, viewBox, originalWidth, originalHeight } =
			parseSVGDocument(content);

		const { width: finalWidth, height: finalHeight } = calculateDimensions(
			{ width: originalWidth, height: originalHeight },
			{ width, height },
		);

		return {
			attributes: {
				width: finalWidth.toString(),
				height: finalHeight.toString(),
				viewBox: viewBox || `0 0 ${originalWidth} ${originalHeight}`,
			},
			children: element.children || [],
		};

	} catch (error) {
		let errorInfo: ErrorInfo;

		if (error instanceof IconNotFoundError) {
			errorInfo = { type: "not-found", message: error.message };
		} else if (error instanceof InvalidVariantError) {
			errorInfo = { type: "invalid-variant", message: error.message };
		} else {
			errorInfo = {
				type: "fetch-failed",
				message: error instanceof Error ? error.message : "Unknown error",
				details: error instanceof Error ? error.stack : String(error),
			};
		}

		return await loadFallbackFile(fallbackWidth, fallbackHeight, errorInfo);
	}
}
