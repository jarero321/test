import { FCWC } from '@/models';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { geolocalizationStore } from '@/store/geolocalization';

// eslint-disable-next-line react/prop-types
export const GeolocalizationWrapper: React.FC<FCWC> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setPosition } = geolocalizationStore();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition([position.coords.latitude, position.coords.longitude]);
      });
    } else {
      navigate('/geolocalizacion/como-implementarlo');
    }
  }, [location.pathname]);

  return <>{children}</>;
};
