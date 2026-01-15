export type SVGElementType = {
	tag: string;
	attributes: Record<string, string>;
	children?: SVGElementType[];
	text?: string;
};
