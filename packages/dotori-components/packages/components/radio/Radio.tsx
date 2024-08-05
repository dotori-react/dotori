import { useHover } from 'dotori-hooks';
import { Icon } from 'dotori-icons';
import { cn, VariantProps } from 'dotori-utils';

import RadioGroup from './RadioGroup';
import { useRadioGroupContext } from './RadioGroup.context';

const Radio = ({ size, color, variant, label, className, value, renderNode, ...props }: RadioProps) => {
  const { hovered, ref } = useHover<HTMLLabelElement>();
  const ctx = useRadioGroupContext();

  const selected = ctx?.selectedValue === value;

  const contextProps = ctx ? { name: ctx.name, onChange: ctx.onChange } : {};

  return (
    <label ref={ref} className={radioContainerStyle({ size, variant, className, isRenderNode: !!renderNode })}>
      <input type="radio" value={value} {...props} {...contextProps} />
      {renderNode ? (
        renderNode({ hovered, selected })
      ) : (
        <>
          <div className={iconStyle({ size, color, variant, selected, hovered })}>
            {selected && <Icon icon="circle" />}
          </div>
          <span>{label}</span>
        </>
      )}
    </label>
  );
};

interface RadioProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size' | 'color'>,
    VariantProps<typeof iconStyle> {
  name?: string;
  value: string;
  label: string;
  renderNode?: ({ hovered, selected }: { hovered: boolean; selected: boolean }) => React.ReactNode;
}

const radioContainerStyle = cn('inline-flex cursor-pointer items-center justify-center gap-2', {
  variants: {
    size: {
      xs: 'h-4 text-3xs',
      sm: 'h-5 text-2xs',
      md: 'h-6 text-xs',
      lg: 'h-7 text-sm',
      xl: 'h-8 text-md',
    },
    variant: {
      filled: 'text-gray-200',
      outline: 'bg-transparent',
    },
    checked: {
      true: '',
      false: '',
    },
    isRenderNode: {
      true: 'h-auto',
      false: '',
    },
  },
  defaultVariants: {
    size: 'lg',
    variant: 'outline',
  },
});

const iconStyle = cn('rounded-full border', {
  variants: {
    size: {
      xs: 'h-4 w-4 p-[0.125rem]',
      sm: 'h-5 w-5 p-[0.125rem]',
      md: 'h-6 w-6 p-[0.2rem]',
      lg: 'h-7 w-7 p-[0.2rem]',
      xl: 'h-8 w-8 p-1',
    },
    color: {
      black: 'border-gray-900 fill-gray-900',
      blue: 'border-blue-600 fill-blue-600',
      gray: 'border-gray-600 fill-gray-600',
      green: 'border-green-600 fill-green-600',
      red: 'border-red-600 fill-red-600',
      yellow: 'border-yellow-600 fill-yellow-600',
    },
    selected: {
      true: 'border-2',
      false: '',
    },
    hovered: {
      true: 'border-2',
      false: 'border-gray-300',
    },
    variant: {
      filled: 'fill-gray-200',
      outline: '',
    },
  },
  compoundVariants: [
    { color: 'black', selected: true, className: 'border-gray-900' },
    { color: 'blue', selected: true, className: 'border-blue-600' },
    { color: 'gray', selected: true, className: 'border-gray-600' },
    { color: 'green', selected: true, className: 'border-green-600' },
    { color: 'red', selected: true, className: 'border-red-600' },
    { color: 'yellow', selected: true, className: 'border-yellow-600' },
  ],
  defaultVariants: {
    size: 'lg',
    color: 'black',
    variant: 'outline',
  },
});

Radio.Group = RadioGroup;

export default Radio;
