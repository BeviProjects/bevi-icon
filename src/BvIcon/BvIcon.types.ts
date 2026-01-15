import type { ErrorInfo } from "@core/errors";
import type {
	IconName,
  VariantType,
  WeightType
} from "@type/iconRegistry";
import type { ReactElement, SVGAttributes } from "react";

export type BvIconProps<T extends IconName> = {
	fallback?: ReactElement;
	height?: number;
	name: T;
	onError?: (error: ErrorInfo) => void;
	showErrorIcon?: boolean;
	title?: string;
	variant?: VariantType<T>;
	weight?: WeightType<T>;
	width?: number;
} & Omit<SVGAttributes<SVGSVGElement>, "color" | "width" | "height">;
