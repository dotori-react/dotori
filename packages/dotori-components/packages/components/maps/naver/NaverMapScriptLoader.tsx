import { useCreateElement } from 'dotori-hooks';

const NaverMapScriptLoader = ({ children, clientId }: NaverMapScriptLoaderProps) => {
  useCreateElement([
    {
      tagName: 'script',
      attributes: {
        src: `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`,
        type: 'text/javascript',
        defer: true,
      },
    },
  ]);

  return children;
};

interface NaverMapScriptLoaderProps {
  children: React.ReactNode;
  clientId: string;
}

export default NaverMapScriptLoader;
