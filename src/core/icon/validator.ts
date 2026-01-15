import { InvalidVariantError } from "@/core/errors";
import type { Icon } from "@/types/icon";

/**
 * Valida se uma variante existe para um ícone específico
 */
export const validateVariant = (
	icon: Icon,
	variantType: keyof Icon["variants"],
	value: string | undefined,
): string => {
	// Definição de valores padrão caso venha undefined
	if (!value || value === "default") {
		if (variantType === "weight") return "400";
		if (variantType === "variant") return "solid";
		return "default";
	}

	const availableVariants = icon.variants[variantType];

	// Tratamento especial para weight (converte string para number para checar no array)
	if (variantType === "weight") {
		const numValue = Number.parseInt(value, 10);
		if (!(availableVariants as number[]).includes(numValue)) {
			throw new InvalidVariantError(
				icon.displayName,
				variantType,
				value,
				availableVariants.map(String), // Converte para string para a mensagem de erro
			);
		}
		return value;
	}

	// Validação normal para strings (variant)
	if (!(availableVariants as string[]).includes(value)) {
		throw new InvalidVariantError(
			icon.displayName,
			variantType,
			value,
			availableVariants as string[],
		);
	}

	return value;
};
