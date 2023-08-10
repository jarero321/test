import { HelpHeader } from './containers/HelpHeader';
import { HelpInfo } from './containers/HelpInfo';

const Help = () => {
  return (
    <div className="px-[40px]">
      <div>
        <HelpHeader />
      </div>
      <div className="mt-[20px]">
        <HelpInfo />
      </div>
    </div>
  );
};

export default Help;
