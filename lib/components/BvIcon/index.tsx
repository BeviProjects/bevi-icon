import { FC } from 'react'
import Icon from './Icon'

const variantTheme = {
	solid: '222343',
	dark: '222343',
	light: '25CBDB',
	duo: 'inherit',
}

interface BvIconProps {
	variant?: string | 'solid' | 'duo' | 'dark' | 'light'
	name: string
	title?: string
	size?: number
}

const BvIcon: FC<BvIconProps> = (
	{ variant = 'solid', name, title, size },
	props
) => {
	return (
		<svg
			width={size ? size * 16 : 32}
			height={size ? size * 16 : 32}
			viewBox={`0 0 32 32`}
			aria-hidden='true'
			data-icon={`bv-${name}`}
			color={`#${
				variantTheme[variant as keyof typeof variantTheme]
			}`}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}>
			{title ? <title>{title}</title> : ''}
			<Icon variant={variant} name={name} />
		</svg>
	)
}

export default BvIcon
