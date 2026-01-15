import { InvalidVariantError } from "@core/errors";
import type { Logo } from "@type/logo";

/**
 * Valida se uma variante existe para um logo específico
 */
export const validateVariant = (
	logo: Logo,
	variantType: keyof Logo["variants"],
	value: string | undefined,
): string => {
	// Se não foi especificado, usa "default"
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
};
