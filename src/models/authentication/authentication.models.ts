import Geolocalization from '../geolocalization/geolocalization.models';

interface RegisterUser extends Geolocalization {
  id: number;
  password: string;
  username: string;
  email: string;
  is_staff: boolean;
  is_customer: boolean;
  is_persona_fisica: boolean;
  is_persona_moral: boolean;
}

export type { RegisterUser };
