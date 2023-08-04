import { TypeWithKey } from '@/models';

const getSize = (size: string): string => {
  const sizes: TypeWithKey<string> = {
    'auth-size': 'font-helveticaBold text-6xl 2xl:text-7xl',
    'onboarding-size': 'font-helveticaBold text-3xl 2xl:text-4xl',
    'title-size': 'font-helveticaBold text-2xl 2xl:text-3xl',
    'extra-size': 'font-helveticaBold text-xl 2xl:text-2xl',
    'text-size': 'font-helveticaBold text-lg 2xl:text-xl',
    'small-size': 'font-helveticaBold text-base 2xl:text-lg',
    'extraSmall-size': 'font-helveticaBold text-sm 2xl:text-base',
  };

  return sizes[size] || sizes['extra-size'];
};

const getResponsiveText = (target: string): string => {
  return `font-helveticaBold ${getSize(target)}`;
};

const getTextColor = (color: string) => {
  const typeColor: TypeWithKey<string> = {
    'primary-color': 'text-primary-color',
    'secondary-color': 'text-secondary-color',
    'primary-gray': 'text-primary-gray',
    'secondary-gray': 'text-secondary-gray',
    'main-gray': 'text-main-gray',
    secondary: 'text-secondary',
    pending: 'text-pending',
    canceled: 'text-canceled',
    complete: 'text-complete',
    white: 'text-white',
  };

  return typeColor[color] || color;
};

export { getTextColor, getResponsiveText };
