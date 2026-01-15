import { IconNotFoundError } from "@/core/errors/IconNotFoundError"; // (Verifique o passo 5)
import { icons } from "@/data/icons";
import type { Icon, ResolvedIcon, VariantKey } from "@/types/icon";
import { validateVariant } from "./validator";

/**
 * Resolve um ícone e suas variantes
 */
export const resolveIcon = (
	displayName: string,
	variants: VariantKey = {},
): ResolvedIcon => {
	// 1. Busca o ícone
	const icon = findIconByDisplayName(displayName);

	if (!icon) {
		throw new IconNotFoundError(displayName);
	}

	// 2. Valida e normaliza as variantes
	// Padrão: variant=solid, weight=400
	const resolvedVariants: Required<VariantKey> = {
		variant: validateVariant(icon, "variant", variants.variant),
		weight: validateVariant(icon, "weight", variants.weight),
	};

	return {
		icon, // Note que na sua interface ResolvedLogo a chave é 'icon', não 'logo'
		svgPath: "",
		appliedVariants: resolvedVariants,
		isValid: true,
	};
};

/**
 * Busca um ícone pelo displayName
 */
export const findIconByDisplayName = (
	displayName: string,
): Icon | undefined => {
	return icons.find(
		(icon) =>
			icon.displayName.toLowerCase() === displayName.toLowerCase() &&
			icon.status === "active",
	);
};

/**
 * Retorna lista de todos os displayNames disponíveis
 */
export const getAvailableIconNames = (): string[] => {
	return icons
		.filter((icon) => icon.status === "active")
		.map((icon) => icon.displayName);
};

// ---------------------------------------------------------------------------
/**
 * Constrói o nome do arquivo SVG baseado no ID e weight
 * A variante (solid, duo) não entra aqui pois ela define a PASTA, não o arquivo.
 * * Padrão: [id][-weight].svg
 *
 * Exemplos:
 * - account-box.svg (se weight for "400" ou default)
 * - agriculture-600.svg (se weight for "600")
 */
export function buildFileName(iconId: string, weight: string): string {
	// Se o weight for default ou 400, retorna apenas o ID.svg
	if (!weight || weight === "default" || weight === "400") {
		return `${iconId}.svg`;
	}

	return `${iconId}-${weight}.svg`;
}
