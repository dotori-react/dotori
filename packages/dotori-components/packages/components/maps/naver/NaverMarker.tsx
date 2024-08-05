import { memo, useEffect, useState } from 'react';

import MarkerIcon from './MarkerIcon';
import { useNaverMapContext } from './NaverMap.context';

const NaverMarker = memo(({ latitude, longitude }: NaverMarkerProps) => {
  const [marker, setMarker] = useState<naver.maps.Marker | null>(null);
  const ctx = useNaverMapContext();

  useEffect(() => {
    const createNaverMarker = () => {
      const { naver } = window;

      if (!naver || !ctx.map) return;

      const position = new naver.maps.LatLng(latitude, longitude);
      const naverMarker = new naver.maps.Marker({
        position,
        map: ctx.map,
        icon: {
          content: MarkerIcon({ title: 'testdccdasdcsdfdfyjhfgdearsgthf' }),
          // 마커의 크기 지정
          size: new naver.maps.Size(16, 35),
          // 마커의 기준위치 지정
          anchor: new naver.maps.Point(16, 35),
        },
      });

      naver.maps.Event.addListener(naverMarker, 'click', e => {
        if (!ctx.map) return;

        const { coord } = e as { coord: naver.maps.Coord };

        ctx.map.setZoom(17, true);
        ctx.map.panTo(coord, { duration: 200 });
      });

      setMarker(naverMarker);
    };

    if (document.readyState === 'complete') createNaverMarker();
    else window.addEventListener('load', createNaverMarker);

    return () => {
      window.removeEventListener('load', createNaverMarker);
      marker?.setMap(null);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctx.map]);

  useEffect(() => {
    if (!marker) return;

    const position = new naver.maps.LatLng(latitude, longitude);
    marker.setPosition(position);
  }, [latitude, longitude, marker]);

  return null;
});

export interface NaverMarkerProps {
  latitude: number;
  longitude: number;
}

export default NaverMarker;
