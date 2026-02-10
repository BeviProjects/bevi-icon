'use client'
// Componente principal
export { default as BvIcon } from "./BvIcon";

// Data - permite que usuários importem a lista completa
export { icons as allBvIcons } from "./data/icons";

// Types
export type {
	Icon as BvIconType,
	IconName as BvIconName,
	IconRegistry as BvIconRegistry,
	IconVariants as BvIconVariants,
	Metadata as BvMetadata,
	VariantKey as BvVariantKey,
	VariantType as BvVariantType,
} from "./types";
