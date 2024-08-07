import { useCreateElement, useHover } from 'dotori-hooks';
import { Icon } from 'dotori-icons';
import { cn, VariantProps } from 'dotori-utils';
import { Fragment } from 'react/jsx-runtime';

import { Button, Portal, Tooltip } from '@dotori-components/components';

const DialButton = ({ size, actions, withoutTooltip }: DialButtonProps) => {
  const { hovered: buttonHovered, ref: buttonRef } = useHover<HTMLButtonElement>();
  const { hovered: actionHovered, ref: actionRef } = useHover<HTMLDivElement>();

  const hovered = buttonHovered || actionHovered;

  const actionDynamicStyle = (index: number) => ({
    transitionDuration: `${hovered ? ((actions?.length ?? 0) - index) * 150 + 100 : index * 100}ms`,
  });

  useCreateElement([{ tagName: 'div', attributes: { id: 'dial-button' } }]);

  return (
    <Portal target={document.getElementById('dial-button') as HTMLElement}>
      <div className="fixed bottom-0 left-0 z-[2] m-5 flex flex-col-reverse">
        <Button ref={buttonRef} className={dialButtonStyle({ size })}>
          <Icon className={dialButtonIconStyle({ visible: hovered })} icon="close" />
        </Button>

        <div ref={actionRef} className={actionContainerStyle({ size, visible: hovered })}>
          {actions?.map((action, index) => (
            <Fragment key={action.name}>
              {withoutTooltip ? (
                <div className={actionStyle({ size, visible: hovered })} style={actionDynamicStyle(index)}>
                  {action.icon}
                </div>
              ) : (
                <Tooltip color="gray" label={action.name} position="right">
                  <div
                    key={action.name}
                    className={actionStyle({ size, visible: hovered })}
                    style={actionDynamicStyle(index)}>
                    {action.icon}
                  </div>
                </Tooltip>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </Portal>
  );
};

interface DialButtonProps extends VariantProps<typeof actionStyle> {
  actions?: { icon: React.ReactNode; name: string }[];
  withoutTooltip?: boolean;
}

const dialButtonStyle = cn('z-[2] rounded-full p-0 shadow-xl', {
  variants: {
    size: {
      sm: 'h-10 w-10',
      md: 'h-14 w-14',
      lg: 'h-20 w-20',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const dialButtonIconStyle = cn('fill-white p-3 transition-all', {
  variants: {
    visible: {
      true: '',
      false: '-rotate-45',
    },
  },
});

const actionContainerStyle = cn(
  'absolute bottom-1/2 left-0 flex flex-col items-center justify-center gap-3 rounded-b-full pt-2',
  {
    variants: {
      visible: {
        true: '',
        false: 'pointer-events-none',
      },
      size: {
        sm: 'w-10 pb-10',
        md: 'w-14 pb-14',
        lg: 'w-20 pb-20',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const actionStyle = cn('w-full rounded-full bg-white shadow-md transition-all hover:bg-gray-200', {
  variants: {
    size: {
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-14 w-14',
    },
    visible: {
      true: 'scale-100 cursor-pointer opacity-100',
      false: 'scale-0 opacity-0',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export default DialButton;
