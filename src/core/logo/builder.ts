/**
 * Constrói o nome do arquivo SVG baseado nas variantes
 * Padrão: [variant][-color][-context].svg (sem o logoId no início)
 */
export const buildFileName = (variants: {
	variant: string;
	color: string;
	context: string;
}): string => {
	const parts: string[] = [];

	// Adiciona variant (ou "default" se for padrão)
	if (variants.variant !== "default") {
		parts.push(variants.variant);
	}

	// Adiciona color se não for default
	if (variants.color !== "default") {
		parts.push(variants.color);
	}

	// Adiciona context se não for default
	if (variants.context !== "default") {
		parts.push(variants.context);
	}

	// Se não tem nenhuma parte, retorna "default.svg"
	// Se tem partes, junta com "-"
	return parts.length === 0 ? "default.svg" : `${parts.join("-")}.svg`;
};
