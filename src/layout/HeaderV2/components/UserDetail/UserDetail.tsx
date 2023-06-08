import { Typography } from '@/components';
import React from 'react';

const UserDetail: React.FC = () => {
  return (
    <div>
      <Typography className="font-semibold" size="xs">
        Luis Miguel Saavedra H.
      </Typography>
      <Typography className="underline" colors="secondary-color" size="xs">
        luis.saavedra.kuspit.com
      </Typography>
    </div>
  );
};

export default UserDetail;
