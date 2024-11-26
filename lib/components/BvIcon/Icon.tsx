import solid from './variant/solid';
import duo from './variant/duo';
import dark from './variant/dark';
import light from './variant/light';
import fourHundred from './weight/400';
import sixHundred from './weight/600';

import { variantType } from './types/variant';
import { weightType } from './types/weight';
import {NotFound} from './utils/notFound'
import { specialWeightIcons } from './utils/specialWeightIcons';

const iconVariantMap = {
  solid,
  duo,
  dark,
  light,
};

const iconWeightMap: Record<weightType, Record<string, React.ReactNode>> = {
  400: fourHundred,
  600: sixHundred,
};

type VariationIconProps = {
  name: string;
  variant?: keyof typeof iconVariantMap;
  weight?: keyof typeof iconWeightMap;
};

export const Icon = ({ variant, weight, name }: VariationIconProps) => {
  // Verifica se o ícone pertence aos "specialWeightIcons"
  if (weight && specialWeightIcons[weight]?.includes(name)) {
    const weightComponent = iconWeightMap[weight];
    return <>{weightComponent[name] || <NotFound />}</>;
  }

  // Fallback para variant
  if (variant && iconVariantMap[variant]) {
    return <>{iconVariantMap[variant][name] || <NotFound />}</>;
  }

  return <NotFound />;
};
