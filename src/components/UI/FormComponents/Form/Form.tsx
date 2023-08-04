import { TypeWithKey } from '@/models';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export interface FormInterface {
  className?: string;
  children: React.ReactNode;
  // eslint-disable-next-line no-unused-vars
  onSubmit(data: TypeWithKey<string>): void;
  id?: string;
}

const Form: React.FC<FormInterface> = ({
  className,
  children,
  onSubmit,
  id,
}) => {
  const methods = useForm({ mode: 'onBlur' });
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <form className={className} id={id} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
