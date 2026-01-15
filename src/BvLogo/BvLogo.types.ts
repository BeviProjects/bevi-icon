import type { ErrorInfo } from "@core/errors";
import type {
	ColorType,
	ContextType,
	LogoName,
	VariantType,
} from "@type/logoRegistry";
import type { ReactElement, SVGAttributes } from "react";

export type BvLogoProps<T extends LogoName> = {
	color?: ColorType<T>;
	context?: ContextType<T>;
	fallback?: ReactElement;
	height?: number;
	name: T;
	onError?: (error: ErrorInfo) => void;
	showErrorIcon?: boolean;
	title?: string;
	variant?: VariantType<T>;
	width?: number;
} & Omit<SVGAttributes<SVGSVGElement>, "color" | "width" | "height">;
