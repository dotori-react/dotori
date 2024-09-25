# ActionIcon Component

The `ActionIcon` component is a versatile button that integrates with the `Icon` component from `dotori-icons`. It allows for customization in terms of color, size, and hover behavior, making it suitable for various interactive elements in your UI.

## Features

- **Icon Integration**: The button uses the `Icon` component from `dotori-icons` to display the specified icon.
- **Colors**: The button supports a variety of color options (`black`, `blue`, `gray`, `green`, `red`, `yellow`).
- **Sizes**: The icon inside the button can be rendered in different sizes (`xs`, `sm`, `md`, `lg`, `xl`).
- **Hover Behavior**: The button can be configured to either have a hover background color or not (`withoutHoverColor`).
- **Customizable**: Additional classes can be passed to customize the appearance further.

## Props

This component extends the standard `button` element props with additional customization options:

- **icon**: Specifies the icon to be displayed, using the `icon` prop from the `Icon` component.
- **color**: Sets the color of the icon and hover background. One of `'black' | 'blue' | 'gray' | 'green' | 'red' | 'yellow'`. Default is `'gray'`.
- **size**: Sets the icon size. One of `'xs' | 'sm' | 'md' | 'lg' | 'xl'`. Default is `'sm'`.
- **withoutHoverColor**: If `true`, the button will not change background color on hover. Default is `false`.
- **className**: Additional class names can be passed to further customize the button's styling.

## Example

```typescript
// Example 1: Basic Action Icon Button with default settings
<ActionIcon icon="check" />

// Example 2: Action Icon Button with custom color and size
<ActionIcon icon="trash" color="red" size="lg" />

// Example 3: Action Icon Button without hover color
<ActionIcon icon="settings" withoutHoverColor />

// Example 4: Customized Action Icon Button with additional class names
<ActionIcon icon="user" className="custom-class" />
```
