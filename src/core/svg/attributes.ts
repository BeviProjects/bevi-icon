import { ATTRIBUTE_MAP } from "@BvIcon/BvIcon.constants";

export const toCamelCase = (str: string): string => {
	return str.replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase());
};

/**
 * Converte uma string de estilo CSS em objeto React
 * Exemplo: "mask-type:luminance" -> { maskType: "luminance" }
 */
export function parseStyleString(styleString: string): Record<string, string> {
	const styleObject: Record<string, string> = {};

	// Separar por ponto e vírgula
	const declarations = styleString.split(";").filter((decl) => decl.trim());

	declarations.forEach((declaration) => {
		const [property, value] = declaration.split(":").map((s) => s.trim());

		if (property && value) {
			// Converter propriedade para camelCase (ex: mask-type -> maskType)
			const camelProperty = toCamelCase(property);
			styleObject[camelProperty] = value;
		}
	});

	return styleObject;
}

/**
 * Função para converter atributos HTML em props do React
 */
export function convertAttributes(
	attributes: Record<string, string>,
): Record<string, string | number | Record<string, string>> {
	const reactAttributes: Record<
		string,
		string | number | Record<string, string>
	> = {};

	Object.entries(attributes).forEach(([key, value]) => {
		// Tratar atributo style especialmente
		if (key === "style") {
			reactAttributes.style = parseStyleString(value);
			return;
		}

		// Usar mapeamento direto se existir
		if (ATTRIBUTE_MAP[key]) {
			reactAttributes[ATTRIBUTE_MAP[key]] = value;
			return;
		}

		// Converter kebab-case para camelCase
		if (key.includes("-")) {
			reactAttributes[toCamelCase(key)] = value;
			return;
		}

		// Manter o atributo como está
		reactAttributes[key] = value;
	});

	return reactAttributes;
}
