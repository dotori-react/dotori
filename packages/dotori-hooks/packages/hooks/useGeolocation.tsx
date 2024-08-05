import { useEffect, useState } from 'react';

const useGeolocation = () => {
  const [geolocation, setGeoLocation] = useState(defaultGeolocation);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleSuccess = (position: GeolocationPosition) => {
      const {
        coords: { latitude, longitude, accuracy },
      } = position;

      setGeoLocation(prev => ({ ...prev, latitude, longitude, accuracy }));
      setError(null);
    };

    const handleError = (err: GeolocationPositionError) => {
      setGeoLocation(prev => ({ ...prev, ...defaultGeolocation }));
      setError(err.message);
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return {
    ...geolocation,
    error,
  };
};

const defaultGeolocation = {
  // default : Noryangjin Gangnam-Church
  latitude: 37.510281563099014,
  longitude: 126.9449936286638,
  accuracy: 0,
};

export default useGeolocation;
