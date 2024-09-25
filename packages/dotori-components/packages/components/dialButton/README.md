# DialButton

The `DialButton` component is a floating action button (FAB) with expandable actions, commonly used in mobile and web applications to provide quick access to secondary actions. It integrates with `dotori-hooks`, `dotori-icons`, and `dotori-utils` for enhanced functionality and styling.

## Features

- **Expandable Actions**: The button can expand to reveal multiple action buttons when hovered.
- **Tooltip Support**: Each action can optionally display a tooltip for better context.
- **Customizable Sizes**: The button and its actions can be rendered in different sizes (`sm`, `md`, `lg`).
- **Hover Interaction**: The button and actions respond to hover states for an interactive user experience.

## Props

### DialButtonProps

This component extends basic properties with additional customization options:

- **actions**: An array of action objects, each containing:
  - `icon`: A React node representing the icon for the action.
  - `name`: A string representing the name of the action, used in the tooltip.
- **withoutTooltip**: If `true`, tooltips will not be displayed for the action buttons. Default is `false`.
- **size**: Sets the size of the main button and actions. One of `'sm' | 'md' | 'lg'`. Default is `'md'`.
- **className**: Additional class names can be passed to further customize the button's styling.

## Example

```typescript
const actions = [
  { icon: <Icon icon="edit" />, name: 'Edit' },
  { icon: <Icon icon="share" />, name: 'Share' },
  { icon: <Icon icon="delete" />, name: 'Delete' },
];

// Example 1: Basic Dial Button with actions
<DialButton actions={actions} />

// Example 2: Dial Button without tooltips
<DialButton actions={actions} withoutTooltip />

// Example 3: Large Dial Button
<DialButton size="lg" actions={actions} />
```
