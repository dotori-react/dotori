# Polymorphic Component

The `Polymorphic` component allows for flexible component rendering by accepting an `as` prop to specify the element type to be rendered. It supports passing all valid props for the specified element and forwards refs appropriately.

## Features

- **Polymorphism**: The `Polymorphic` component allows the user to specify any HTML or custom element type via the `as` prop.
- **Props Flexibility**: It supports all props associated with the specified element, ensuring that you can customize the rendered component with ease.
- **Ref Forwarding**: Refs are correctly forwarded to the underlying DOM element or custom component.

## Usage

### PolymorphicProps

The `Polymorphic` component accepts the following props:

- **as**: An optional prop that specifies the element type to render. If not provided, the component defaults to rendering a `div`.
- Any additional props will be passed down to the rendered component.

### Example

```typescript
import React from 'react';
import Polymorphic from './path/to/Polymorphic';

// Example 1: Rendering a 'div' (default behavior)
const DefaultExample = () => <Polymorphic className="default-class">Default Div</Polymorphic>;

// Example 2: Rendering a 'button' with custom props
const ButtonExample = () => (
  <Polymorphic as="button" className="button-class" onClick={() => alert('Button clicked!')}>
    Click Me
  </Polymorphic>
);

// Example 3: Rendering a custom component
const LinkExample = () => (
  <Polymorphic as="a" href="https://example.com" target="_blank" rel="noopener noreferrer">
    Visit Example
  </Polymorphic>
);
```

## Types

### PolymorphicProps

```typescript
type PolymorphicProps<T extends React.ElementType> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;
```

- **as**: Specifies the component or HTML element type to render.
- The remaining props depend on the element or component specified by `as`.

### PolymorphicRef

```typescript
type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'];
```

This type ensures that refs are correctly forwarded to the underlying DOM element or custom component.

## Default Behavior

- **Default Element**: If no `as` prop is provided, the `Polymorphic` component will render a `div` by default.
- **Prop Forwarding**: All additional props are forwarded to the specified element, allowing for full customization.

## Notes

- The `Polymorphic` component is ideal for building flexible UI libraries where components need to render different element types based on the context.
- Type safety is ensured using TypeScript, providing accurate prop types for the specified element.
- The component uses `forwardRef` to ensure that refs are correctly passed to the underlying element, making it suitable for use in forms, focus management, or custom component interactions.
