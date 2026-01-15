type Dimensions = {
	width: number;
	height: number;
};

type TargetDimensions = {
	width?: number;
	height?: number;
};

/**
 * Calcula as dimensões finais do SVG mantendo a proporção
 *
 * Casos:
 * - width + height: usa ambos
 * - só width: calcula height proporcionalmente
 * - só height: calcula width proporcionalmente
 * - nenhum: mantém dimensões originais
 */
export function calculateDimensions(
	original: Dimensions,
	target: TargetDimensions,
): Dimensions {
	const { width: targetWidth, height: targetHeight } = target;
	const { width: originalWidth, height: originalHeight } = original;

	// Se ambos foram especificados, usa direto
	if (targetWidth && targetHeight) {
		return {
			width: targetWidth,
			height: targetHeight,
		};
	}

	// Se só width foi especificado, calcula height proporcionalmente
	if (targetWidth && !targetHeight) {
		const ratio = originalHeight / originalWidth;
		return {
			width: targetWidth,
			height: Math.round(targetWidth * ratio),
		};
	}

	// Se só height foi especificado, calcula width proporcionalmente
	if (targetHeight && !targetWidth) {
		const ratio = originalWidth / originalHeight;
		return {
			width: Math.round(targetHeight * ratio),
			height: targetHeight,
		};
	}

	// Se nenhum foi especificado, retorna dimensões originais
	return {
		width: originalWidth || 48,
		height: originalHeight || 48,
	};
}
