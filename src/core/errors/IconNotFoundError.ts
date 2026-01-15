import { getAvailableIconNames } from "@core/icon/resolver";

/**
 * Classe de erro customizado para logos não encontrados
 */
export class IconNotFoundError extends Error {
	constructor(displayName: string) {
		super(
			`Icon "${displayName}" not found. Available icons: ${getAvailableIconNames().join(", ")}`,
		);
		this.name = "IconNotFoundError";
	}
}
