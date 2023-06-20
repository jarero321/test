import SwitchedComponent from '@/components/UI/SwitchedComponent';
import { Geolocalization } from './components/Geolocalization';
import { HowToImplement } from './components/HowToImplement';
const Geolocation = () => {
  return (
    <SwitchedComponent active="howToImplement" target="id">
      <div id="main">
        <Geolocalization />
      </div>
      <div id="howToImplement">
        <HowToImplement />
      </div>
    </SwitchedComponent>
  );
};

export default Geolocation;
