import { cn, VariantProps } from 'dotori-utils';

import { CloseButton } from '@dotori-components/components';

const Alert = ({ icon, title, children, color, className, isOpen, close, ...props }: AlertProps) =>
  isOpen && (
    <div className="tw-preflight">
      <section className={alertStyle({ color, className })} {...props}>
        <div className="mb-[10px] flex flex-row-reverse">
          <CloseButton className={iconStyle({ color })} withoutHoverColor onClick={close} />
        </div>
        <div className="flex gap-5">
          {icon && <div className={iconStyle({ color, className })}>{icon}</div>}
          <div className="flex flex-col gap-4 break-words">
            <h3 className={titleStyle({ color, className })}>{title}</h3>
            <div>{children}</div>
          </div>
        </div>
      </section>
    </div>
  );

interface AlertProps extends Omit<React.ComponentPropsWithoutRef<'section'>, 'color'>, VariantProps<typeof alertStyle> {
  isOpen: boolean;
  close: () => void;
  title: string;
  icon?: React.ReactNode;
}

const alertStyle = cn('w-full p-4', {
  variants: {
    color: {
      blue: 'bg-blue-100',
      gray: 'bg-gray-200',
      green: 'bg-green-100',
      red: 'bg-red-200',
      yellow: 'bg-yellow-100',
    },
  },
  defaultVariants: {
    color: 'gray',
  },
});

const titleStyle = cn('font-semibold', {
  variants: {
    color: {
      blue: 'text-blue-600',
      gray: 'text-gray-600',
      green: 'text-green-600',
      red: 'text-red-600',
      yellow: 'text-yellow-600',
    },
  },
  defaultVariants: {
    color: 'gray',
  },
});

const iconStyle = cn('hover:bg-transparent', {
  variants: {
    color: {
      blue: 'text-blue-600',
      gray: 'text-gray-600',
      green: 'text-green-600',
      red: 'text-red-600',
      yellow: 'text-yellow-600',
    },
  },
  defaultVariants: {
    color: 'gray',
  },
});

export default Alert;
