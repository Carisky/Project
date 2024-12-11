import { useEffect, useState } from 'react';

const mg = (query) => {
  return window.matchMedia(query).matches;
};

export const useMediaQuery = (query) => {
  const [isMatches, setMatches] = useState(mg(query));

  const update = () => setMatches(mg(query));
  
  useEffect(() => {
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  return isMatches;
};