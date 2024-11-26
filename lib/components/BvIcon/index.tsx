import { FC, SVGProps } from 'react'
import { Icon } from './Icon'
import { variantType } from './types/variant'
import { weightType } from './types/weight'

const variantTheme = {
	solid: '222343',
	dark: '222343',
	light: '25CBDB',
	duo: 'inherit',
}

interface BvIconProps extends SVGProps<SVGSVGElement> {
	name: string
	size?: number
	title?: string
	variant?: variantType
	weight?: weightType
}

const BvIcon: FC<BvIconProps> = ({
	name,
	size,
	title,
	variant = 'solid',
	weight = 400,
	...props
}) => {
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
			<Icon variant={variant} weight={weight} name={name} />
		</svg>
	)
}

export default BvIcon
