import type { ErrorInfo } from "@core/errors/types";
import { loadSvg } from "@core/logo/loader";
import type { SVGElementType } from "@core/svg/types";
import { useEffect, useRef, useState } from "react";

type UseSvgLoaderParams = {
	name: string;
	color?: string;
	context?: string;
	variant?: string;
	width?: number;
	height?: number;
	onError?: (error: ErrorInfo) => void;
	showErrorIcon?: boolean;
};

type SVGData = {
	attributes: Record<string, string>;
	children: SVGElementType[];
};

type UseSvgLoaderReturn = {
	svgData: SVGData | null;
	errorInfo: ErrorInfo | null;
	isLoading: boolean;
};

export function useSvgLoader({
	name,
	color,
	context,
	variant,
	width,
	height,
	onError,
	showErrorIcon = true,
}: UseSvgLoaderParams): UseSvgLoaderReturn {
	const [svgData, setSvgData] = useState<SVGData | null>(null);
	const [errorInfo, setErrorInfo] = useState<ErrorInfo | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const errorLoggedRef = useRef(false);

	useEffect(() => {
		let isMounted = true;
		setErrorInfo(null);
		setIsLoading(true);
		errorLoggedRef.current = false;

		const load = async () => {
			try {
				const result = await loadSvg({
					name,
					color,
					context,
					variant,
					width,
					height,
					showErrorIcon,
				});

				if (isMounted) {
					// Verificar se o resultado contém um erro
					if (result.error) {
						// Logar erro apenas uma vez
						if (!errorLoggedRef.current) {
							console.error(
								`[BvIcon] ${result.error.type}:`,
								result.error.message,
								result.error.details || "",
							);
							errorLoggedRef.current = true;
							onError?.(result.error);
						}

						setErrorInfo(result.error);
					}

					// Definir os dados do SVG
					setSvgData({
						attributes: result.attributes,
						children: result.children,
					});

					setIsLoading(false);
				}
			} catch (error) {
				// Este catch agora só pega erros inesperados
				// que não foram tratados no loader
				if (isMounted) {
					const unexpectedError: ErrorInfo = {
						type: "fetch-failed",
						message: "Unexpected error in loader",
						details: error instanceof Error ? error.message : String(error),
					};

					if (!errorLoggedRef.current) {
						console.error("[BvIcon] Unexpected error:", error);
						errorLoggedRef.current = true;
						onError?.(unexpectedError);
					}

					setErrorInfo(unexpectedError);
					setIsLoading(false);
				}
			}
		};

		load();

		return () => {
			isMounted = false;
		};
	}, [name, color, context, variant, width, height, onError, showErrorIcon]);

	return { svgData, errorInfo, isLoading };
}
