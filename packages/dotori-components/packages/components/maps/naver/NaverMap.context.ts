import { createSafeContext } from 'dotori-context';

interface NaverMapContextValue {
  map: naver.maps.Map | null;
  latitude: number;
  longitude: number;
}

export const [NaverMapProvider, useNaverMapContext] = createSafeContext<NaverMapContextValue>(
  'NaverMarker component was not found in the tree',
);
