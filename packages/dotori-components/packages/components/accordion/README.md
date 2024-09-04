# Accordion

The `Accordion` component set provides a flexible and customizable way to implement accordions in your React applications. It supports multiple or single expanded panels, custom icons, and dynamic content rendering.

## Features

- **Accordion**: The core wrapper for each individual accordion item. It uses context to share state between the accordion control and panel.
- **AccordionControl**: The clickable button that toggles the accordion open or closed. Customizable with left and right icons.
- **AccordionPanel**: The collapsible panel that displays the content associated with the `AccordionControl`.
- **AccordionGroup**: A wrapper to manage multiple accordion items, allowing for single or multiple accordions to be open at once.

## Props

### AccordionProps

- **value**: A unique string identifier for the accordion. Required when used within an `AccordionGroup`.
- **children**: The content of the accordion, typically including `AccordionControl` and `AccordionPanel`.

## Example

```typescript
import React from 'react';
import Accordion from './path/to/Accordion';

const SingleAccordion = () => (
  <Accordion value="item1">
    <Accordion.Control>Click to open</Accordion.Control>
    <Accordion.Panel>Content goes here</Accordion.Panel>
  </Accordion>
);
```

---

# AccordionControl

The `AccordionControl` component is a clickable button that toggles the visibility of an associated `AccordionPanel`. It supports optional left and right icons, as well as a dynamic arrow icon that rotates based on the open/close state.

## Features

- **Dynamic Arrow Icon**: By default, an arrow icon (`chevronArrowRight`) is displayed and rotates based on the open/close state.
- **Customizable Icons**: You can add custom left and right icons using the `leftIcon` and `rightIcon` props.
- **Context-Aware**: It works seamlessly within an `AccordionGroup` to manage the state of multiple accordions, supporting both single and multiple open accordion items.
- **Hover State**: A hover effect (`hover:bg-gray-200`) is applied to the button for visual feedback.

## Props

### AccordionControlProps

- **leftIcon**: A React node to render an icon on the left side of the control.
- **rightIcon**: A React node to render an icon on the right side of the control.
- **children**: The label text or content of the control.
- **className**: Additional class names to customize the button style.

## Example

```typescript
// Example 1: Basic Accordion Control with default chevron icon
<Accordion value="item1">
  <Accordion.Control>Click to open</Accordion.Control>
  <Accordion.Panel>Panel content goes here</Accordion.Panel>
</Accordion>

// Example 2: Accordion Control with custom icons
<Accordion value="item2">
  <Accordion.Control leftIcon={<Icon icon="star" />} rightIcon={<Icon icon="arrowRight" />}>
    Custom Icon Accordion
  </Accordion.Control>
  <Accordion.Panel>More content here</Accordion.Panel>
</Accordion>
```

## Default Behavior

- **Chevron Arrow**: If neither `leftIcon` nor `rightIcon` is provided, a chevron arrow is displayed by default. It rotates when the accordion is expanded or collapsed.

- **Multiple Expansion Support**: When used within an `AccordionGroup`, the control works with the group's state to handle multiple or single expansions.

## Notes

- The `AccordionControl` leverages `useAccordionContext` and `useAccordionGroupContext` to manage its open/close state based on whether it is part of an `AccordionGroup`.

- If used outside of an `AccordionGroup`, the `toggle` function is called directly to manage the accordion's state.

- The `buttonStyle` and `chevronArrowIconStyle` are built using the `cn` utility from `dotori-utils`, allowing conditional styling based on the component's state.

---

# AccordionPanel

The `AccordionPanel` component is used to display the content associated with an `AccordionControl`. It handles the open/close animation and adjusts its height and opacity based on the accordion's state.

## Features

- **Collapsible Panel**: The panel transitions between open and closed states with smooth animations, changing its height and opacity.
- **Context-Aware**: It integrates seamlessly with `Accordion` and `AccordionGroup` components, automatically managing its open/close state.
- **Customizable Styling**: Additional class names can be passed via the `className` prop for further customization.

## Props

### AccordionPanelProps

- **children**: The content to be displayed inside the panel.
- **className**: Optional additional class names to customize the panel style.

## Example

```typescript
// Example 1: Basic Accordion with a collapsible panel
<Accordion value="item1">
  <Accordion.Control>Click to expand</Accordion.Control>
  <Accordion.Panel>
    <p>This is the content of the panel.</p>
  </Accordion.Panel>
</Accordion>

// Example 2: Accordion Panel with custom class names
<Accordion value="item2">
  <Accordion.Control>Open for more details</Accordion.Control>
  <Accordion.Panel className="custom-panel-class">
    <p>Custom content in a styled panel.</p>
  </Accordion.Panel>
</Accordion>
```

## Default Behavior

- **Open/Close Animation**: The panel smoothly transitions between fully expanded and collapsed states, controlled by its `isOpen` state.
- **Overflow Handling**: When collapsed, the panel hides its content using `overflow-hidden` and reduces its height to `0` to ensure the content is hidden from view.
- **Transition Effects**: The panel applies a transition to its padding (`py-3` when open) and opacity for a smooth animation effect.

## Notes

- The `AccordionPanel` component leverages the `useAccordionContext` and `useAccordionGroupContext` hooks to manage its state.
- It uses the `cn` utility from `dotori-utils` to handle conditional class names based on the panel's open/close state.
- When used within an `AccordionGroup`, it automatically synchronizes with the group's state, making it easy to manage multiple accordion panels.

---

# AccordionGroup

The `AccordionGroup` component manages the state for multiple `Accordion` components. It controls whether multiple or only one accordion can be open at a time, and tracks the open/close state for each accordion within the group.

## Features

- **Multiple or Single Expansion**: The component allows you to specify if multiple accordions can be opened at once or if only one can be open.
- **State Management**: The component manages the open/close state of each accordion item in the group and ensures proper synchronization.
- **Context Provider**: The component provides the accordion state and control methods to its children through context.

## Props

### AccordionGroupProps

- **defaultValue**: A string representing the initially opened accordion. If provided, the accordion with this value will be opened by default.
- **multiple**: A boolean determining if multiple accordions can be opened simultaneously. Default is `false`.
- **children**: The accordion items to be rendered inside the group. This should be a collection of `Accordion` components.

## Example

```typescript
const AccordionGroupExample = () => (
  <AccordionGroup defaultValue="item1" multiple>
    <Accordion value="item1">
      <Accordion.Control>Accordion 1</Accordion.Control>
      <Accordion.Panel>Content for Accordion 1</Accordion.Panel>
    </Accordion>
    <Accordion value="item2">
      <Accordion.Control>Accordion 2</Accordion.Control>
      <Accordion.Panel>Content for Accordion 2</Accordion.Panel>
    </Accordion>
    <Accordion value="item3">
      <Accordion.Control>Accordion 3</Accordion.Control>
      <Accordion.Panel>Content for Accordion 3</Accordion.Panel>
    </Accordion>
  </AccordionGroup>
);

export default AccordionGroupExample;
```

## Default Behavior

- **Single Expansion by Default**: If the `multiple` prop is not set to `true`, only one accordion can be open at a time. When an accordion is opened, any other open accordion in the group will automatically close.
- **Multiple Expansion**: If the `multiple` prop is set to `true`, more than one accordion can be open simultaneously.

## Methods Provided by Context

The `AccordionGroup` component provides the following methods and state to its children via the `AccordionGroupProvider`:

- **updateSelectedValue**: Updates the currently selected accordion.
- **updateAccordionState**: Updates the open/close state of a specific accordion.
- **updateAccordionStateForSingle**: Ensures only one accordion is open by closing others when a new one is opened (used when `multiple` is `false`).

## Notes

- Each `Accordion` within the group must have a unique `value` prop to properly manage its state.
- The `AccordionGroup` component works in conjunction with `Accordion`, `AccordionControl`, and `AccordionPanel` to create a fully functional accordion system.
- This component uses React's `useState` to track the open/close state of each accordion and provides that state through context.
