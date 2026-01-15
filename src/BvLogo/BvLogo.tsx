import { renderSVGElement } from "@core/svg/renderer";
import type { SVGElementType } from "@core/svg/types";
import { useSvgLoader } from "@hook/useSvgLoader";
import type { LogoName } from "@type/logoRegistry";
import type { ReactElement } from "react";
import type { BvLogoProps } from "./BvLogo.types";

const BvLogo = <T extends LogoName>({
	color,
	context,
	fallback,
	height,
	name,
	onError,
	showErrorIcon = true,
	title,
	variant,
	width,
	...props
}: BvLogoProps<T>): ReactElement | null => {
	const { svgData, errorInfo, isLoading } = useSvgLoader({
		name,
		color,
		context,
		variant,
		width,
		height,
		onError,
		showErrorIcon,
	});

	if (errorInfo && fallback) return fallback;
	if (isLoading || !svgData) return null;

	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width={svgData.attributes.width}
			height={svgData.attributes.height}
			viewBox={svgData.attributes.viewBox}
			data-logo-name={name}
			data-error={errorInfo?.type}
			aria-label={errorInfo ? `Error: ${errorInfo.type}` : name}
		>
			<title>{title ? title : `Logo ${name}`}</title>
			{svgData.children.map((child: SVGElementType, index: number) =>
				renderSVGElement(child, index),
			)}
		</svg>
	);
};

export default BvLogo;
