import { useEffect, useState } from 'react';

const useGeolocation = () => {
  const [geolocation, setGeoLocation] = useState<Geolocation | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleSuccess = (position: GeolocationPosition) => {
      const { coords, timestamp } = position;

      setGeoLocation({ ...coords, timestamp });
      setError(null);
    };

    const handleError = (err: GeolocationPositionError) => {
      setGeoLocation(null);
      setError(err.message);
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { geolocation, error };
};

interface Geolocation extends GeolocationCoordinates {
  timestamp: GeolocationPosition['timestamp'];
}

export default useGeolocation;
