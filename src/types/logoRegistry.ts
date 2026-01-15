import type { logos } from "@data/logos";

export type LogoRegistry = (typeof logos)[number];
export type LogoName = LogoRegistry["displayName"];

type GetLogoByName<T extends LogoName> = Extract<
	LogoRegistry,
	{ displayName: T }
>;

export type ColorType<T extends LogoName> =
	GetLogoByName<T>["variants"]["color"][number];
export type ContextType<T extends LogoName> =
	GetLogoByName<T>["variants"]["context"][number];
export type VariantType<T extends LogoName> =
	GetLogoByName<T>["variants"]["variant"][number];
