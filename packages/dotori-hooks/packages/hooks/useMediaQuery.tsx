import { useEffect, useState } from 'react';

// ^ example : '(max-width: 300px)'
const useMediaQuery = (query: string) => {
  const [isMatched, setIsMatched] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    const handleChange = () => setIsMatched(matchMedia.matches);

    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [query]);

  return isMatched;
};

export default useMediaQuery;
