/**
 * Classe de erro customizado para variantes inválidas
 */
export class InvalidVariantError extends Error {
	constructor(
		displayName: string,
		variantType: string,
		value: string,
		available: string[],
	) {
		super(
			`Invalid ${variantType} "${value}" for icon "${displayName}". ` +
				`Available ${variantType}s: ${available.join(", ")}`,
		);
		this.name = "InvalidVariantError";
	}
}
