import type { ErrorInfo } from "@/core/errors/types";
import { loadSvg } from "@/core/icon/loader"; // Ajustado para o novo caminho
import type { SVGElementType } from "@/core/svg/types";
import { useEffect, useRef, useState } from "react";

type UseSvgLoaderParams = {
	name: string;
	variant?: string;      // Ex: 'solid', 'duo'
	weight?: string | number; // Ex: 400, '600'
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
	variant,
	weight,
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

		// Reseta estados ao mudar as props principais
		setErrorInfo(null);
		setIsLoading(true);
		errorLoggedRef.current = false;

		const load = async () => {
			try {
				const result = await loadSvg({
					name,
					variant,
					// Converte para string para garantir compatibilidade com o loader
					weight: weight !== undefined ? String(weight) : undefined,
					width,
					height,
					showErrorIcon,
				});

				if (isMounted) {
					// Verificar se o resultado contém um erro
					if (result.error) {
						// Logar erro apenas uma vez por tentativa
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

					// Definir os dados do SVG (mesmo com erro, pode haver fallback)
					setSvgData({
						attributes: result.attributes,
						children: result.children,
					});

					setIsLoading(false);
				}
			} catch (error) {
				// Este catch pega erros inesperados não tratados pelo loader
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
		// Dependências atualizadas: removeu color/context, adicionou weight
	}, [name, variant, weight, width, height, onError, showErrorIcon]);

	return { svgData, errorInfo, isLoading };
}
