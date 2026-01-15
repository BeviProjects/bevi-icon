import { convertAttributes } from "@core/svg/attributes";
import type { SVGElementType } from "@core/svg/types";
import { createElement, type ReactElement } from "react";

/**
 * Renderiza recursivamente um elemento SVG e seus filhos
 * Converte a estrutura SVGElementType em elementos React
 */
export function renderSVGElement(
	element: SVGElementType,
	key: number,
): ReactElement {
	const { tag, attributes, children, text } = element;

	// Converte atributos HTML para props React
	const reactAttributes = convertAttributes(attributes);

	// Se o elemento tem apenas texto, renderiza com o texto
	if (text) {
		return createElement(tag, { key, ...reactAttributes }, text);
	}

	// Se tem filhos, renderiza recursivamente
	return createElement(
		tag,
		{ key, ...reactAttributes },
		children?.map((child, index) => renderSVGElement(child, index)),
	);
}
