import {FC} from 'react'
import solid from './variant/solid'
import duo from './variant/duo'
import dark from './variant/dark'
import light from './variant/light'

interface VariationIconProps {
	variant: string
	name: string
}

const Icon: FC<VariationIconProps> = ({
	variant,
	name,
}) => {
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

export default Icon