import type { SVGElementType } from "@/core/svg/types";

type SVGData = {
	attributes: Record<string, string>;
	children: SVGElementType[];
};

/**
 * [EMERGENCY FALLBACK]
 * Usado apenas se o src/icons/fallback.svg falhar ao carregar.
 */
export function createErrorFallback(width: number, height: number): SVGData {
	return {
		attributes: {
			width: width.toString(),
			height: height.toString(),
			viewBox: "0 0 32 32", // Ajustei para 24px (padrão de ícone)
			fill: "none",
			stroke: "currentColor",
		},
		children: [
            // Um quadrado simples com X (mais leve que o anterior)
			{
				tag: "path",
				attributes: {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					"stroke-width": "2",
					d: "M18 6L6 18M6 6l12 12",
                    stroke: "#FF0000" // Vermelho para indicar erro crítico
				},
			},
		],
	};
}
