const ScreenReaderOnly = ({ children }: ScreenReaderOnlyProps) => (
  <div className="tw-preflight">
    <section className="absolute -m-[1px] h-[1px] w-[1px] overflow-hidden whitespace-nowrap clip-rect-zero clip-path-none">
      {children}
    </section>
  </div>
);

interface ScreenReaderOnlyProps {
  children: React.ReactNode;
}

export default ScreenReaderOnly;
