import React from 'react';
import { HeaderV2 } from '../HeaderV2';
import { SideBarV2 } from '../SideBarV2';

export type LayoutV2Props = {
  isActive?: boolean;
  header?: JSX.Element;
  children?: JSX.Element;
};

const LayoutV2: React.FC<LayoutV2Props> = ({ children }) => {
  return (
    <main className="w-full min-h-screen relative flex bg-[#F3F3F8]">
      <div className="w-[250px] min-h-screen max-h-screen fixed h-full shadow-2xl z-[10]">
        <SideBarV2 />
      </div>
      <article className="w-full h-full shadow-xl flex flex-col items-end">
        <HeaderV2 />
        <div className=" h-full" style={{ width: 'calc(100% - 250px)' }}>
          {children}
        </div>
      </article>
    </main>
  );
};

export default LayoutV2;
