import { TypeWithKey } from '@/models';

const getVariant = (variant: string): string => {
  const options: TypeWithKey<string> = {
    primary:
      'font-helvetica font-semibold text-base bg-primary-color text-white rounded-[6px]',
    secondary:
      'font-helvetica font-semibold text-base bg-secondary text-primary-color  rounded-[6px]',
    grey: 'font-helvetica font-semibold text-base !text-white bg-[#6B7280]  py-4 rounded flex justify-center items-center',
    link: 'font-helvetica font-semibold text-base  inline-block rounded-[6px] text-primary-color',
  };

  return options[variant] || options.primary;
};

export default getVariant;
