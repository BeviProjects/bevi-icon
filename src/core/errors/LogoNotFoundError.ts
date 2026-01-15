import { getAvailableLogoNames } from "@core/logo/resolver";

/**
 * Classe de erro customizado para logos não encontrados
 */
export class LogoNotFoundError extends Error {
	constructor(displayName: string) {
		super(
			`Logo "${displayName}" not found. Available logos: ${getAvailableLogoNames().join(", ")}`,
		);
		this.name = "LogoNotFoundError";
	}
}
