import { InvalidVariantError, LogoNotFoundError } from "@core/errors/";
import { logos } from "@data/logos";
import type { Logo, ResolvedLogo, VariantKey } from "@type/logo";

/**
 * Resolve um logo e suas variantes
 */
export const resolveLogo = (
	displayName: string,
	variants: VariantKey = {},
): ResolvedLogo => {
	// 1. Busca o logo
	const logo = findLogoByDisplayName(displayName);

	if (!logo) {
		throw new LogoNotFoundError(displayName);
	}

	// 2. Valida e normaliza as variantes
	const resolvedVariants: Required<VariantKey> = {
		variant: validateVariant(logo, "variant", variants.variant),
		color: validateVariant(logo, "color", variants.color),
		context: validateVariant(logo, "context", variants.context),
	};

	return {
		logo,
		svgPath: "", // Não usado mais com fetch, mantido por compatibilidade
		appliedVariants: resolvedVariants,
		isValid: true,
	};
};

/**
 * Busca um logo pelo displayName
 */
export const findLogoByDisplayName = (
	displayName: string,
): Logo | undefined => {
	return logos.find(
		(logo) =>
			logo.displayName.toLowerCase() === displayName.toLowerCase() &&
			logo.status === "active",
	);
};

/**
 * Retorna lista de todos os displayNames disponíveis
 */
export const getAvailableLogoNames = (): string[] => {
	return logos
		.filter((logo) => logo.status === "active")
		.map((logo) => logo.displayName);
};

/**
 * Retorna as variantes disponíveis para um logo específico
 */
export const getLogoVariants = (
	displayName: string,
): Logo["variants"] | null => {
	const logo = findLogoByDisplayName(displayName);
	return logo ? logo.variants : null;
};

/**
 * Valida se uma variante existe para um logo específico
 */
function validateVariant(
	logo: Logo,
	variantType: keyof Logo["variants"],
	value: string | undefined,
): string {
	if (!value || value === "default") {
		return "default";
	}

	const availableVariants = logo.variants[variantType];

	if (!availableVariants.includes(value)) {
		throw new InvalidVariantError(
			logo.displayName,
			variantType,
			value,
			availableVariants,
		);
	}

	return value;
}
/**
 * Constrói o nome do arquivo SVG baseado nas variantes
 * Padrão: [variant][-color][-context].svg
 *
 * Exemplos:
 * - default.svg (todas variantes default)
 * - horizontal.svg (variant: horizontal, resto default)
 * - horizontal-color.svg (variant: horizontal, color: color)
 * - horizontal-color-dark.svg (todas as variantes)
 */
export function buildFileName(variants: Required<VariantKey>): string {
	const parts: string[] = [];

	// Adiciona variant se não for default
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
}
