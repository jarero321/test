import { TypeWithKey } from '@/models';

const responsiveText: TypeWithKey<string> = {
  xs: 'text-xs md:text-sm lg:text-base xl:text-lg',
  sm: 'text-sm md:text-base lg:text-lg xl:text-xl',
  base: 'text-base md:text-lg lg:text-xl xl:text-4xl',
  lg: 'text-lg md:text-xl lg:text-2xl xl:text-[25px]',
  xl: 'text-xl md:text-2xl lg:text-3xl xl:text-7xl',
  '2xl': 'text-2xl md:text-4xl lg:text-6xl xl:text-9xl',
  default: 'text-base',
};

const getResponsiveText = (target: string): string => {
  return responsiveText[target] || responsiveText.default;
};

const getTextColor = (color: string) => {
  const typeColor: TypeWithKey<string> = {
    'primary-color': 'text-primary-color',
    'secondary-color': 'text-secondary-color',
    'primary-gray': 'text-primary-gray',
    'secondary-gray': 'text-secondary-gray',
    secondary: 'text-secondary',
    pending: 'text-pending',
    canceled: 'text-canceled',
    complete: 'text-complete',
    white: 'text-white',
  };

  return typeColor[color] || color;
};

export { getTextColor, getResponsiveText };
