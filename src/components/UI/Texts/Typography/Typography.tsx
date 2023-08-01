import { getResponsiveText, getTextColor } from './utils/typography.utils';
import { TypographyInterface } from '@/models';
import React from 'react';

const Typography: React.FC<TypographyInterface> = ({
  children,
  size = 'base',
  colors = 'primary-color',
  className = '',
}) => {
  return (
    <div className={`${getResponsiveText(size)} ${className}`}>
      {children ? (
        <span className={getTextColor(colors)}>{children}</span>
      ) : null}
    </div>
  );
};

export default Typography;
