export type Icon = {
	id: string;
	name: string;
	displayName: string;
	status: "active" | "inactive";
	tags: string[];
	variants: IconVariants;
	metadata: Metadata;
};

export type IconVariants = {
	variant: Array<'solid' | 'duo' | 'dark' | 'light'>;
	weight: Array<400 | 600>;
};

export type Metadata = {
	createdAt: string;
	updatedAt: string;
	addedIn: string;
	updatedIn: string;
};

// Interface para as props de entrada (que podem vir como string ou number)
export type VariantKey = {
	variant?: string;
	weight?: string;
};

// Renomeado de ResolvedLogo para ResolvedIcon
export type ResolvedIcon = {
	icon: Icon;
	svgPath: string; // Mantido por compatibilidade, mas o loader constrói dinamicamente
	appliedVariants: Required<VariantKey>;
	isValid: boolean;
};
