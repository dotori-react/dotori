# Tooltip

The `Tooltip` component is a wrapper around the TinyModal component that renders a tooltip-style modal. It leverages TinyModal with the type set to 'tooltip' to provide a quick, accessible, and customizable tooltip functionality for any child element.

## Features

**Hover-Based Trigger**: The tooltip displays when the user hovers over the wrapped element.
**Customizable Positioning**: The tooltip can appear at the top, bottom, left, or right of the target element.
**Configurable Gap**: Control the spacing between the tooltip and the target element.
**Flexible Styling**: Supports various colors and custom styling options using TailwindCSS classes.
**Auto-Positioning**: Automatically positions based on the target element's dimensions and location.

## Props

### Tooltip Props

- **label** (string): The text or content displayed inside the tooltip. This prop is required.
- **position** (optional, `'top' | 'bottom' | 'left' | 'right'`): Determines the position of the tooltip relative to the target element. Defaults to `'top'`.
- **gap** (optional, number): The distance between the tooltip and the target element. Defaults to `10`.
- **color** (optional, `'black' | 'white' | 'blue' | 'gray' | 'green' | 'red' | 'yellow'`): Controls the background and text colors of the tooltip using predefined variants.
- **className** (optional, string): Additional CSS classes to customize the tooltip's appearance.
  Any other props available in React.ComponentPropsWithoutRef<'div'> can be passed, such as id, style, or event handlers.

### Example Usage

```ts
  import { Tooltip } from 'dotori-components';

// Example 1: Simple tooltip with default positioning
const SimpleTooltip = () => (
  <Tooltip label="This is a tooltip">
    <button>Hover over me</button>
  </Tooltip>
);

// Example 2: Tooltip positioned at the bottom with custom styles
const CustomTooltip = () => (
  <Tooltip label="Custom styled tooltip" position="bottom" color="blue" className="custom-tooltip-class">
    <div>Hover over this element</div>
  </Tooltip>
);

// Example 3: Tooltip with increased gap
const SpacedTooltip = () => (
  <Tooltip label="Tooltip with increased gap" gap={20}>
    <span>Hover over me for more space</span>
  </Tooltip>
);
```
