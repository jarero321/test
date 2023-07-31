import { TypeWithKey } from '@/models';

const getVariant = (variant: string): string => {
  const options: TypeWithKey<string> = {
    primary:
      'font-helveticaBold text-lg bg-primary-color text-white rounded-[6px]',
    secondary:
      'font-helveticaBold text-lg bg-secondary text-primary-color  rounded-[6px]',
    grey: 'font-helveticaBold text-lg !text-white bg-[#6B7280]  py-4 rounded flex justify-center items-center',
    link: 'font-helveticaBold text-lg  inline-block rounded-[6px] text-primary-color',
  };

  return options[variant] || options.primary;
};

export default getVariant;
