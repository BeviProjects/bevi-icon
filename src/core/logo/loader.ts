import { InvalidVariantError, LogoNotFoundError } from "@/core/errors";
import type { ErrorInfo } from "@/core/errors/types";
import { parseSVGDocument } from "@/core/svg/parser";
import type { SVGElementType } from "@/core/svg/types";
import { calculateDimensions } from "@/utils/dimensions";
import { createErrorFallback } from "@/utils/fallback";
import { buildFileName, resolveLogo } from "./resolver";

type LoadSvgParams = {
	name: string;
	color?: string;
	context?: string;
	variant?: string;
	width?: number;
	height?: number;
	showErrorIcon?: boolean;
};

type LoadSvgResult = {
	attributes: Record<string, string>;
	children: SVGElementType[];
	error?: ErrorInfo; // ADICIONAR campo de erro
};

// Módulos SVG carregados estaticamente
const svgModules = import.meta.glob("../../logos/**/*.svg", {
	eager: true,
	query: "?url",
	import: "default",
}) as Record<string, string>;

/**
 * Carrega e processa um arquivo SVG
 * Agora retorna o fallback COM a informação do erro ao invés de lançar exceção
 */
export async function loadSvg(params: LoadSvgParams): Promise<LoadSvgResult> {
	const { name, color, context, variant, width, height } = params;

	try {
		// 1. Resolver o logo
		const resolved = resolveLogo(name, { variant, color, context });

		// 2. Construir o caminho do arquivo
		const fileName = buildFileName(resolved.appliedVariants);
		const svgPath = `../../logos/${resolved.logo.id}/${fileName}`;
		const svgUrl = svgModules[svgPath];

		if (!svgUrl) {
			const error: ErrorInfo = {
				type: "fetch-failed",
				message: "SVG file not found in modules",
				details: `Path: ${svgPath}`,
			};

			// Retorna fallback com informação do erro
			return {
				...createErrorFallback(width || 48, height || 48),
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
				...createErrorFallback(width || 48, height || 48),
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

		// 6. Retornar estrutura processada (sucesso - sem erro)
		return {
			attributes: {
				width: finalWidth.toString(),
				height: finalHeight.toString(),
				viewBox: viewBox || `0 0 ${originalWidth} ${originalHeight}`,
			},
			children: element.children || [],
		};
	} catch (error) {
		// Criar ErrorInfo baseado no tipo de erro
		let errorInfo: ErrorInfo;

		if (error instanceof LogoNotFoundError) {
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
			// Já é um ErrorInfo
			errorInfo = error as ErrorInfo;
		} else {
			// Erro desconhecido
			errorInfo = {
				type: "fetch-failed",
				message: error instanceof Error ? error.message : "Unknown error",
				details: error instanceof Error ? error.stack : String(error),
			};
		}

		// Sempre retorna fallback com informação do erro
		return {
			...createErrorFallback(width || 48, height || 48),
			error: errorInfo,
		};
	}
}
