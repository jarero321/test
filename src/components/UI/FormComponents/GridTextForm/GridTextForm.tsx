import { Typography } from '@/components';
import React from 'react';

export type GridTextFormProps = {
  text?: string;
  children?: JSX.Element;
};

const GridTextForm: React.FC<GridTextFormProps> = ({ text, children }) => {
  return (
    <div className="h-[70px]">
      <Typography className="pb-[5px]" colors="secondary-gray" size="xs">
        {text ?? ''}
      </Typography>
      {children && children}
    </div>
  );
};

export default GridTextForm;
