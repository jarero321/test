import { Typography } from '@/components';
import React from 'react';

export type ListItemProps = {
  title?: string;
  text?: string;
};

const ListItem: React.FC<ListItemProps> = ({ title, text }) => {
  return (
    <div className="flex justify-between w-[100%] gap-[88px]">
      <Typography className="xl:!text-[16px]" colors="grey" size="xs">
        {title}
      </Typography>
      <Typography className="xl:!text-[16px]" colors="primary-color" size="xs">
        {text}
      </Typography>
    </div>
  );
};

export default ListItem;
