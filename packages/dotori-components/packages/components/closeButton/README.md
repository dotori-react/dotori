# CloseButton Component

This is a customizable close button component built with React and `dotori-utils`. It leverages the `Icon` component from `dotori-icons` to display a close icon and provides various styles and sizes for different use cases.

## Features

- **Hover Color**: The button can have a hover background color or be configured to have no hover color.
- **Sizes**: The close icon can be rendered in different sizes (`xs`, `sm`, `md`, `lg`, `xl`).
- **Customizable**: Additional classes can be passed to customize the appearance further.
- **Icon Integration**: The button uses the `Icon` component from `dotori-icons` to display the close icon.

## Props

This component extends the standard `button` element props with additional customization options:

- **withoutHoverColor**: If `true`, the button will not change background color on hover. Default is `false`.
- **size**: Sets the icon size. One of `'xs' | 'sm' | 'md' | 'lg' | 'xl'`. Default is `'sm'`.
- **className**: Additional class names can be passed to further customize the button's styling.
- **children**: The content to be displayed inside the button (typically not used since this is a close button).

## Example

```typescript
// Example 1: Basic Close Button
<CloseButton />

// Example 2: Close Button Without Hover Color
<CloseButton withoutHoverColor />

// Example 3: Large Close Button
<CloseButton size="lg" />

// Example 4: Customized Close Button
<CloseButton className="custom-class" />
```
