import { FCWC } from '@/models';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// eslint-disable-next-line react/prop-types
export const GeolocalizationWrapper: React.FC<FCWC> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords.latitude, position.coords.longitude);
        },
        () => {
          navigate('/geolocalizacion/como-implementarlo');
        }
      );
    }
  }, []);

  return <>{children}</>;
};
