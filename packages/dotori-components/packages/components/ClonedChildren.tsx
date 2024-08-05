import { Children, ReactElement, cloneElement, forwardRef, isValidElement } from 'react';

const ClonedChildren = forwardRef<HTMLElement, ClonedChildrenProps>(({ children, ...props }, ref) =>
  Children.map(children, child =>
    isValidElement(child) ? cloneElement(child as ReactElement, { ref, ...props }) : child,
  ),
);

interface ClonedChildrenProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
}

export default ClonedChildren;
