import React, { useState, useEffect } from 'react'
import solid from './variant/solid'
import duo from './variant/duo'
import dark from './variant/dark'
import light from './variant/light'

interface VariationIconProps {
	variant: string
	name: string
}

const VariationIcon = ({
	variant,
	name,
}: VariationIconProps) => {
	if (variant === 'solid') {
		return <>{solid[name]}</>
	} else if (variant === 'duo') {
		return <>{duo[name]}</>
	} else if (variant === 'dark') {
		return <>{dark[name]}</>
	} else if (variant === 'light') {
		return <>{light[name]}</>
	} else {
		return <span>Variante não encontrada</span>
	}
}

interface BvIconProps {
	variant?: string | 'solid' | 'duo' | 'dark' | 'light'
	name: string
	title?: string
	size?: number
	className?: string
}

const BvIcon = ({
	variant,
	name,
	title,
	size,
	className,
}: BvIconProps) => {
	const [variantColor, setVariantColor] =
		useState('inherit')

	useEffect(() => {
		if (variant === 'solid') {
			setVariantColor('#222343')
		} else if (variant === 'dark') {
			setVariantColor('#222343')
		} else if (variant === 'light') {
			setVariantColor('#25CBDB')
		} else {
			setVariantColor('inherit')
		}
	}, [variant])

	return (
		<svg
			width={size ? size * 16 : 32}
			height={size ? size * 16 : 32}
			viewBox={`0 0 32 32`}
			aria-hidden='true'
			data-icon={`bv-${name}`}
			className={`bv-icon bv-${name} ${
				className ? className : ''
			}`}
			color={variantColor}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			{title ? <title>{title}</title> : ''}
			{name}
			<VariationIcon
				variant={variant ? variant : 'solid'}
				name={name}
			/>
		</svg>
	)
}

export default BvIcon
