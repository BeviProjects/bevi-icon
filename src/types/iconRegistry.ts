import type { icons } from "@data/icons";

// Extrai o tipo de um elemento do array de ícones
export type IconRegistry = (typeof icons)[number];

// Cria um tipo que é a união de todos os nomes de exibição (ex: "accountBox" | "agriculture")
export type IconName = IconRegistry["displayName"];

// Helper para extrair o ícone específico baseado no nome
type GetIconByName<T extends IconName> = Extract<
	IconRegistry,
	{ displayName: T }
>;

// Extrai as variantes válidas para aquele ícone específico
export type VariantType<T extends IconName> =
	GetIconByName<T>["variants"]["variant"][number];

// Extrai os pesos válidos para aquele ícone específico
export type WeightType<T extends IconName> =
	GetIconByName<T>["variants"]["weight"][number];
