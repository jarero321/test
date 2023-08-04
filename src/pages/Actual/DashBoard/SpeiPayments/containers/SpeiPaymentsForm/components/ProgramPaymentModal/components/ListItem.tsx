import { Typography } from '@/components';
import React from 'react';

export type ListItemProps = {
  title?: string;
  text?: string;
};

const ListItem: React.FC<ListItemProps> = ({ title, text }) => {
  return (
    <div className="grid grid-cols-2 w-[100%] gap-[88px]">
      <Typography className="xl:!text-[16px]" colors="secondary-gray" size="xs">
        {title}
      </Typography>
      <Typography className="xl:!text-[16px]" colors="primary-color" size="xs">
        {text}
      </Typography>
    </div>
  );
};

export default ListItem;
