import React, { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import { MessageError } from '../InputForm/components/MessageError';
import { Typography } from '../../Texts/Typography';

interface DocumentUploaderSmallProps {
  index: number;
  title?: string;
  description?: string;
}

const DocumentUploaderSmall: React.FC<DocumentUploaderSmallProps> = ({
  index,
  description,
  title,
}) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useForm();
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setValue(`document[${index}]`, selectedFile);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isError = (errors: any): boolean => {
    return Boolean(errors && errors[`document_${index}`]);
  };

  return (
    <div
      className={`relative flex w-full bg-[#f2f2f2] h-12 rounded-[12px] justify-between ${
        isError(errors) && 'border border-red-300'
      } `}
    >
      <div className="w-full h-full px-4 py-2 rounded-lg focus:outline-none">
        <Typography size="xs"> {title} </Typography>
        <Typography className="mt-[12px]" colors="black" size="xs">
          {description}
        </Typography>
        {isError(errors) && (
          <MessageError
            message={errors[`document_${index}`]?.message as string}
          />
        )}
      </div>
      <div>
        <label className="inline-flex absolute top-0 right-0 h-full items-center px-4 py-2 bg-secondary text-primary-color rounded-md shadow-sm cursor-pointer">
          <span>Examinar</span>
          <input
            type="file"
            {...register(`document_${index}`, {
              required: { value: true, message: 'Campo obligatorio' },
            })}
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>
    </div>
  );
};

export default DocumentUploaderSmall;
