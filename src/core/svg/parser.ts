import type { SVGElementType } from "@core/svg/types";

type ParseResult = {
	element: SVGElementType;
	viewBox: string;
	originalWidth: number;
	originalHeight: number;
};

/**
 * Elementos SVG que precisam manter camelCase
 * (case-sensitive no SVG)
 */
const SVG_CAMEL_CASE_ELEMENTS = new Set([
	"linearGradient",
	"radialGradient",
	"clipPath",
	"textPath",
	"animateMotion",
	"animateTransform",
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence",
]);

/**
 * Normaliza o nome da tag SVG
 * Mantém camelCase para elementos que precisam
 */
function normalizeSVGTagName(tagName: string): string {
	// Se o elemento está na lista de camelCase, procura o nome correto
	const lowerTagName = tagName.toLowerCase();

	for (const correctName of SVG_CAMEL_CASE_ELEMENTS) {
		if (correctName.toLowerCase() === lowerTagName) {
			return correctName;
		}
	}

	// Caso contrário, mantém lowercase
	return lowerTagName;
}

/**
 * Parseia recursivamente um elemento DOM em SVGElementType
 */
export function parseSVGElement(element: Element): SVGElementType {
	const attributes: Record<string, string> = {};

	// Extrair todos os atributos
	Array.from(element.attributes).forEach((attr) => {
		attributes[attr.name] = attr.value;
	});

	const children: SVGElementType[] = [];

	// Processar nós filhos
	Array.from(element.childNodes).forEach((child) => {
		if (child.nodeType === Node.ELEMENT_NODE) {
			children.push(parseSVGElement(child as Element));
		}
	});

	// Se não tem filhos mas tem texto, retorna com texto
	const textContent = element.textContent?.trim();
	if (children.length === 0 && textContent) {
		return {
			tag: normalizeSVGTagName(element.tagName),
			attributes,
			text: textContent,
		};
	}

	return {
		tag: normalizeSVGTagName(element.tagName),
		attributes,
		children: children.length > 0 ? children : undefined,
	};
}

/**
 * Parseia um documento SVG completo (string XML)
 * Retorna a estrutura parseada + metadados (viewBox, dimensões)
 */
export function parseSVGDocument(content: string): ParseResult {
	const parser = new DOMParser();
	const svgDoc = parser.parseFromString(content, "image/svg+xml");

	// Verificar se houve erro no parsing
	const parserError = svgDoc.querySelector("parsererror");
	if (parserError) {
		throw {
			type: "parse-failed",
			message: "Failed to parse SVG content",
			details: parserError.textContent || undefined,
		};
	}

	const svgElement = svgDoc.documentElement;

	// Verificar se é realmente um elemento SVG
	if (svgElement.tagName.toLowerCase() !== "svg") {
		throw {
			type: "parse-failed",
			message: "Document is not a valid SVG",
			details: `Root element is <${svgElement.tagName}> instead of <svg>`,
		};
	}

	// Extrair dimensões originais
	const originalWidth = parseFloat(svgElement.getAttribute("width") || "0");
	const originalHeight = parseFloat(svgElement.getAttribute("height") || "0");
	const viewBox = svgElement.getAttribute("viewBox") || "";

	const children: SVGElementType[] = [];

	// Primeiro, adicionar <defs> se existir
	const defsElement = svgElement.querySelector("defs");

	if (defsElement) {
		children.push(parseSVGElement(defsElement));
	}

	// Depois, adicionar todos os outros elementos (exceto defs, para não duplicar)
	Array.from(svgElement.children).forEach((child) => {
		if (child.tagName.toLowerCase() !== "defs") {
			children.push(parseSVGElement(child));
		}
	});

	return {
		element: {
			tag: "svg",
			attributes: {},
			children,
		},
		viewBox,
		originalWidth,
		originalHeight,
	};
}
