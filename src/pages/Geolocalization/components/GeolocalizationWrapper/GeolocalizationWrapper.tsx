import { useEffect, useState } from 'react';

interface GeolocationData {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
}

interface GeolocalizationWrapperProps {
  children: (data: GeolocationData) => React.ReactNode;
}

export const GeolocalizationWrapper: React.FC<GeolocalizationWrapperProps> = ({
  children,
}) => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  }, []);

  const geolocationData: GeolocationData = { latitude, longitude, error };

  return <>{children(geolocationData)}</>;
};
