import React, { FC } from 'react';

interface SwitchedProps {
  active: string;
  target: string;
  className?: string;
  children?: React.ReactNode;
}

const SwitchedComponent: FC<SwitchedProps> = ({
  active,
  children,
  target,
  className,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (
    <div className={className ?? ''}>
      {React.Children.toArray(children ?? []).filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (child: any) => child.props[target] === active
      )}
    </div>
  );
};

export default SwitchedComponent;
