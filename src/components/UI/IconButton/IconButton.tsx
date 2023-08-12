import DownloadIcon from '@/resources/icons/DownloadIcon';
import React, { ReactNode } from 'react';

interface IconButtonProps {
  icon?: ReactNode; // Accepts SVG or any ReactNode
  label?: string;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, label, onClick }) => {
  return (
    <button onClick={onClick}>
      <DownloadIcon />
    </button>
  );
};

export default IconButton;
