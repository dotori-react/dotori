import { renderToString } from 'react-dom/server';

const MarkerIcon = ({ title }: MarkerIconProps) =>
  renderToString(
    <div className="relative z-20 flex cursor-pointer items-center justify-center rounded-full border-2 border-blue-600 bg-white px-2 py-1">
      <div
        className="table-cell h-4 w-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/src/assets/react.svg)' }}></div>

      <div className="h-4 max-w-40 cursor-pointer overflow-hidden text-ellipsis px-2 font-semibold leading-4 typo-2xs700">
        {title}
      </div>
      <div className="absolute left-[11px] top-full z-[1] h-0 w-0 rounded-none border-4 border-b-transparent border-l-transparent border-r-transparent border-t-white"></div>
      <div className="absolute left-[8px] top-full z-0 h-0 w-0 rounded-none border-[7px] border-b-transparent border-l-transparent border-r-transparent border-t-blue-600"></div>
    </div>,
  );

interface MarkerIconProps {
  title: string;
}

export default MarkerIcon;
