/**
 * Constrói o nome do arquivo SVG baseado no ID e no peso.
 * A estrutura de pastas já resolve a variante, então aqui focamos no arquivo.
 *
 * Regra:
 * - Se weight for "400" (default), retorna apenas "[id].svg"
 * - Se weight for diferente (ex: "600"), retorna "[id]-[weight].svg"
 */
export const buildFileName = (iconId: string, weight: string): string => {
	// Se for o peso padrão (regular/400), o arquivo não tem sufixo
	if (weight === "400" || weight === "default") {
		return `${iconId}.svg`;
	}

	return `${iconId}-${weight}.svg`;
};
