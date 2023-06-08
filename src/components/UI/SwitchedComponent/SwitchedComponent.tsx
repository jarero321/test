import React, { FC } from 'react';

interface SwitchedProps {
  active: string;
  target: string;
  children?: React.ReactNode;
}

const SwitchedComponent: FC<SwitchedProps> = ({ active, children, target }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (
    <>
      {React.Children.toArray(children ?? []).filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (child: any) => child.props[target] === active
      )}
    </>
  );
};

export default SwitchedComponent;
