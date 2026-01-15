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

export type VariantKey = {
	variant?: string;
	weight?: string;
};

export type ResolvedLogo = {
	icon: Icon;
	svgPath: string;
	appliedVariants: Required<VariantKey>;
	isValid: boolean;
};
