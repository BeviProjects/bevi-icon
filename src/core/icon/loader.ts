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

export async function loadSvg(params: LoadIconParams): Promise<LoadIconResult> {
	const { name, variant, weight, width, height } = params;

	try {
		// 1. Resolver o ícone
    const resolved = resolveIcon(name, { variant, weight });

		// 2. Construir o caminho do arquivo
		// Lógica: icons/[variant]/[id]-[weight?].svg
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

			return {
				...createErrorFallback(width || 24, height || 24), // Ajustei fallback default para 24px (padrão de ícone)
				error,
			};
		}

		// 3. Buscar o arquivo SVG
		const response = await fetch(svgUrl);

		if (!response.ok) {
			const error: ErrorInfo = {
				type: "fetch-failed",
				message: "Failed to fetch SVG",
				details: `Status: ${response.status} - ${response.statusText}`,
			};

			return {
				...createErrorFallback(width || 24, height || 24),
				error,
			};
		}

		// 4. Parsear o SVG
		const content = await response.text();
		const { element, viewBox, originalWidth, originalHeight } =
			parseSVGDocument(content);

		// 5. Calcular dimensões finais
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
			errorInfo = {
				type: "not-found",
				message: error.message,
			};
		} else if (error instanceof InvalidVariantError) {
			errorInfo = {
				type: "invalid-variant",
				message: error.message,
			};
		} else if ((error as ErrorInfo).type) {
			errorInfo = error as ErrorInfo;
		} else {
			errorInfo = {
				type: "fetch-failed",
				message: error instanceof Error ? error.message : "Unknown error",
				details: error instanceof Error ? error.stack : String(error),
			};
		}

		return {
			...createErrorFallback(width || 24, height || 24),
			error: errorInfo,
		};
	}
}
