import React, { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { Typography } from '../Typography';
import { MessageError } from '../InputForm/components/MessageError';
import { RadioButton } from '../RadioButton';
import { useForm } from 'react-hook-form';

interface DocumentUploaderProps {
  index: number;
  title?: string;
  description?: string;
}

const DocumentUploader: React.FC<DocumentUploaderProps> = ({
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
      className={`w-full h-[150px] bg-[#F8F8FA] rounded-[12px] px-[24px] py-[24px] flex justify-between ${
        isError(errors) && 'border border-red-300'
      } `}
    >
      <div>
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
        <label className="inline-flex h-[35px] items-center px-4 py-2 bg-secondary text-primary-color rounded-md shadow-sm cursor-pointer">
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

export default DocumentUploader;
