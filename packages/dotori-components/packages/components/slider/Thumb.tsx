const Thumb = ({ children, percentage, isShow, label }: ThumbProps) => {
  const thumbStyle = {
    left: percentage,
  };

  return (
    <>
      {isShow && (
        <div
          className="absolute -top-full -translate-x-1/2 -translate-y-6 select-none rounded-md bg-black px-2 py-1 text-xs text-white"
          style={thumbStyle}>
          {label}
        </div>
      )}
      {children}
    </>
  );
};

interface ThumbProps {
  children: React.ReactNode;
  percentage: string;
  isShow: boolean;
  label: string;
}

export default Thumb;
