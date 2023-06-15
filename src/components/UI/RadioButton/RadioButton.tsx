'use-client';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { MessageError } from '../InputForm/MessageError';

interface RadioButtonProps {
  options: { value: string; label: string }[];
  name: string;
  isRequired?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  options,
  name,
  isRequired,
}) => {
  const methods = useFormContext();
  const {
    control,
    formState: { errors },
  } = methods;

  const isError = (errors: any): boolean => {
    return Boolean(errors && errors[name]);
  };
  return (
    <div>
      <Controller
        control={control}
        defaultValue=""
        name={name}
        render={({ field }) => (
          <>
            {options.map((option) => (
              <div
                className="flex items-center gap-[10px] cursor-pointer pt-[10px]"
                key={option.value}
              >
                <div className="relative h-full flex items-center">
                  <input
                    {...field}
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary-orange "
                    id={option.value}
                    name={name}
                    type="radio"
                    value={option.value}
                  />
                  <div className="pointer-events-none absolute top-[50%] left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      className="h-3.5 w-3.5 fill-primary-orange"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="8" cy="8" data-name="ellipse" r="8"></circle>
                    </svg>
                  </div>
                </div>
                <label className="cursor-pointer" htmlFor={option.value}>
                  {option.label}
                </label>
              </div>
            ))}
          </>
        )}
        rules={{
          required: {
            value: !!isRequired,
            message: 'Campo obligatoorio',
          },
        }}
      />
      {isError(errors) && (
        <MessageError message={errors[name]?.message as string} />
      )}
    </div>
  );
};

export default RadioButton;
