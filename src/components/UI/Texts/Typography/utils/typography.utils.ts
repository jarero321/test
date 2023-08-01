import { TypeWithKey } from '@/models';

const getResponsiveText = (target: string): string => {
  return `font-helveticaBold ${target}`;
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
