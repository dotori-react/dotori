# Button Component

This is a customizable button component built with React and `dotori-utils`. It supports various styles, sizes, and states, making it flexible for different use cases.

## Features

- **Variants**: The button supports different style variants (`filled`, `outline`, `subtle`, `unstyle`) that change its appearance.
- **Colors**: You can choose from a variety of color options (`black`, `blue`, `gray`, `green`, `red`, `yellow`).
- **Sizes**: The button can be rendered in different sizes (`xs`, `sm`, `md`, `lg`, `xl`).
- **Full Width**: The button can be set to occupy the full width of its container.
- **Disabled State**: The button can be disabled, which applies a specific style and prevents interactions.

## Props

### ButtonProps

This component extends the standard `button` element props with additional customization options:

- **variant**: Determines the button's style. One of `'filled' | 'outline' | 'subtle' | 'unstyle'`. Default is `'filled'`.
- **color**: Sets the button's color. One of `'black' | 'blue' | 'gray' | 'green' | 'red' | 'yellow'`. Default is `'black'`.
- **size**: Sets the button's size. One of `'xs' | 'sm' | 'md' | 'lg' | 'xl'`. Default is `'xs'`.
- **fullWidth**: If `true`, the button will take up the full width of its container. Default is `false`.
- **disabled**: If `true`, the button will be disabled and styled accordingly.
- **className**: Additional class names can be passed to further customize the button's styling.
- **children**: The content to be displayed inside the button.

### Example

```typescript
import React from 'react';
import Button from './path/to/Button';

// Example 1: Basic Button
<Button>Click Me</Button>

// Example 2: Disabled Button
<Button disabled>Disabled</Button>

// Example 3: Full Width Button
<Button fullWidth>Full Width</Button>

// Example 4: Custom Size and Color
<Button size="lg" color="blue">Large Blue Button</Button>

// Example 5: Outline Variant
<Button variant="outline">Outline Button</Button>
```
