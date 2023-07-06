import SwitchedComponent from '@/components/UI/SwitchedComponent';
import { Geolocalization } from './components/Geolocalization';
import { HowToImplement } from './components/HowToImplement';
import useStep from '@/hooks/useStep';
const Geolocation = () => {
  const { step } = useStep('step');
  return (
    <SwitchedComponent active={step} target="id">
      <div id="inicio">
        <Geolocalization />
      </div>
      <div id="como-implementarlo">
        <HowToImplement />
      </div>
    </SwitchedComponent>
  );
};

export default Geolocation;
