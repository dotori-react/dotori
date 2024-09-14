# Title

The `Title` component renders a heading element (`h1` to `h6`) based on the `order` prop. It allows for flexible typography styles and can be customized with additional class names.

## Features

- **Dynamic Heading Levels**: The `Title` component renders different heading elements (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`) based on the `order` prop.
- **Customizable Styles**: Predefined typography styles are applied according to the heading level, but additional class names can be passed for further customization.
- **Semantic HTML**: The component ensures that the correct heading level is used for better semantic structure and accessibility.

## Props

### TitleProps

- **order**: A number between `1` and `6` representing the heading level (`h1` to `h6`). This prop is required.
- **className**: An optional string to add custom styles or override the default heading styles.
- **children**: The content to be displayed inside the heading.
- Any other props from `React.ComponentPropsWithoutRef<'head'>` can be passed, such as `id`, `style`, or event handlers.

### Example

```typescript
import React from 'react';
import Title from './path/to/Title';

// Example 1: Rendering an h1 element
const HeadingOne = () => <Title order={1}>This is an H1 Heading</Title>;

// Example 2: Rendering an h3 element with custom styles
const HeadingThree = () => <Title order={3} className="custom-heading">This is an H3 Heading</Title>;

// Example 3: Rendering an h6 element
const HeadingSix = () => <Title order={6}>This is an H6 Heading</Title>;
```

# Title Component

The `Title` component renders a heading element (`h1` to `h6`) based on the `order` prop. It allows for flexible typography styles and can be customized with additional class names.

## Features

- **Dynamic Heading Levels**: The `Title` component renders different heading elements (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`) based on the `order` prop.
- **Customizable Styles**: Predefined typography styles are applied according to the heading level, but additional class names can be passed for further customization.
- **Semantic HTML**: The component ensures that the correct heading level is used for better semantic structure and accessibility.

## Props

### TitleProps

- **order**: A number between `1` and `6` representing the heading level (`h1` to `h6`). This prop is required.
- **className**: An optional string to add custom styles or override the default heading styles.
- **children**: The content to be displayed inside the heading.
- Any other props from `React.ComponentPropsWithoutRef<'head'>` can be passed, such as `id`, `style`, or event handlers.

### Example

```typescript
import React from 'react';
import Title from './path/to/Title';

// Example 1: Rendering an h1 element
const HeadingOne = () => <Title order={1}>This is an H1 Heading</Title>;

// Example 2: Rendering an h3 element with custom styles
const HeadingThree = () => <Title order={3} className="custom-heading">This is an H3 Heading</Title>;

// Example 3: Rendering an h6 element
const HeadingSix = () => <Title order={6}>This is an H6 Heading</Title>;
```

## How It Works

- The `Title` component takes an `order` prop, which determines the heading level (`h1` to `h6`).
- Based on the `order` value, the appropriate heading tag is dynamically rendered.
- The component applies predefined typography styles based on the heading level, using the `titleStyle` function to manage the styles.

### titleStyle Function

The `titleStyle` function uses the `cn` utility from `dotori-utils` to apply conditional styles based on the `order` prop. The following styles are applied:

- h1 (`order: 1`): `typo-3xl700`
- h2 (`order: 2`): `typo-xl700`
- h3 (`order: 3`): `typo-lg700`
- h4 (`order: 4`): `typo-md700`
- h5 (`order: 5`): `typo-sm700`
- h6 (`order: 6`): `typo-xs700`

## Default Behavior

- If no additional `className` is provided, the component defaults to the predefined styles based on the `order`.
- The heading element (`h1`, `h2`, etc.) is dynamically determined by the `order` prop, ensuring proper semantic HTML.

## Notes

- The `Title` component is useful for maintaining consistent typography across your application while ensuring that headings are semantically correct.
- By passing a `className`, you can override or extend the default styles for further customization.
- It is important to use the correct heading levels to maintain a structured and accessible document outline.
