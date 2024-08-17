import { useEffect, useRef, useState } from 'react';

import { useGeolocation } from 'dotori-hooks';

import { NaverMapProvider } from './NaverMap.context';
import NaverMarker from './NaverMarker';

const NaverMap = ({
  children,
  size,
  displayCurrentPositionMarker,
  mode = 'idle',
  onClick,
  onDragEnd,
  ...mapOptions
}: NaverMapProps) => {
  const {
    geolocation: { latitude, longitude },
  } = useGeolocation();
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const [markerCoord, setMarkerCoord] = useState<naver.maps.Coord | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const [y, x] = [markerCoord?.y ?? latitude, markerCoord?.x ?? longitude];

  useEffect(() => {
    const createNaverMap = () => {
      const { naver } = window;

      if (!naver || !ref.current) return;

      const latLng = new naver.maps.LatLng(y, x);

      const naverMap = new naver.maps.Map(ref.current, {
        center: latLng,
        zoom: 17, // 지도 확대 정도
        size,
        ...mapOptions,
      });

      if (mode === 'add') {
        naver.maps.Event.addListener(naverMap, 'click', e => {
          const { coord } = e as { coord: naver.maps.Coord };

          naverMap.panTo(coord, { duration: 200 });
          if (displayCurrentPositionMarker) setMarkerCoord(coord);
          if (onClick) onClick(coord);
        });

        naver.maps.Event.addListener(naverMap, 'dragend', e => {
          const { coord } = e as { coord: naver.maps.Coord };

          naverMap.panTo(coord, { duration: 200 });
          if (displayCurrentPositionMarker) setMarkerCoord(coord);
          if (onDragEnd) onDragEnd(coord);
        });
      }

      setMap(naverMap);
    };

    if (document.readyState === 'complete') createNaverMap();
    else window.addEventListener('load', createNaverMap);

    return () => {
      window.removeEventListener('load', createNaverMap);
      map?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, latitude, longitude]);

  return (
    <NaverMapProvider value={{ map, latitude, longitude }}>
      <div style={size}>
        <div ref={ref}>
          {displayCurrentPositionMarker && <NaverMarker latitude={y} longitude={x} />}
          {children}
        </div>
      </div>
    </NaverMapProvider>
  );
};

interface NaverMapProps extends Omit<naver.maps.MapOptions, 'size'> {
  children?: React.ReactNode;
  size: { width: number; height: number };
  displayCurrentPositionMarker?: boolean;
  onClick?: (coord: naver.maps.Coord) => void;
  onDragEnd?: (coord: naver.maps.Coord) => void;
  mode?: 'idle' | 'add' | 'edit';
}

NaverMap.NaverMarker = NaverMarker;

export default NaverMap;
