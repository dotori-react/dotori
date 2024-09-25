const NumberFormatter = ({ prefix, suffix, value, scale, thousandSeparator, ...rest }: NumberFormatterProps) => (
  <section {...rest}>
    {prefix}
    {applyThousandSeparator(applyScale(value, scale), thousandSeparator)}
    {suffix}
  </section>
);

interface NumberFormatterProps extends React.ComponentPropsWithoutRef<'section'> {
  prefix?: string;
  suffix?: string;
  value: number;
  thousandSeparator?: boolean | string;
  scale?: {
    type: 'ceil' | 'floor' | 'round';
    position: number;
  };
}

const applyThousandSeparator = (value: number, thousandSeparator: boolean | string | undefined) =>
  value
    .toString()
    .split('.')
    .map((part, idx) =>
      idx === 0
        ? part.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            thousandSeparator ? (thousandSeparator === true ? ',' : thousandSeparator) : '',
          )
        : part,
    )
    .join('.');

const applyScale = (
  value: number,
  scale?: {
    type: 'ceil' | 'floor' | 'round';
    position: number;
  },
) => (scale ? Math[scale.type](value * 10 ** scale.position) / 10 ** scale.position : value);

export default NumberFormatter;
