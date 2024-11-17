# Switch

The Switch component is a customizable toggle switch that allows users to activate or deactivate a particular state, supporting features like dark mode styling and responsive sizes.

## Features

- **Customizable Toggle Switch**: The Switch component can be styled and customized using props to fit various use cases.
- **Dark Mode Support**: By using the useDarkModeSwitchContext, the switch can adapt its appearance for light and dark modes.
- **Responsive Sizes**: Multiple sizes are available (`xs, sm, md, lg, xl`) for various design needs.
- **Stateful Transitions**: Includes smooth transitions when toggling states with customizable appearance.

## Props

### SwitchProps

- **checked** (boolean): Determines whether the switch is in the `"on"` or `"off"` state.
- **on** (function): Function to call when the switch is toggled on.
- **off** (function): Function to call when the switch is toggled off.
- **size** (string, optional): Specifies the size of the switch. Options are `xs, sm, md, lg, and xl`. Defaults to `sm`.
- **disabled** (boolean, optional): If true, disables the switch interaction. Defaults to `false`.
- **className** (string, optional): Custom class names for additional styling.
- Other props from `React.ComponentPropsWithoutRef<'input'>` can be used, such as id, style, or event handlers.

Example

```ts
import React, { useState } from 'react';
import { Switch } from 'dotori-components';

const App = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      checked={checked}
      on={() => setChecked(true)}
      off={() => setChecked(false)}
      size="md"
      className="custom-switch"
    />
  );
};
```

## How It Works

The Switch component uses a combination of context, state management, and utility functions to render a toggleable switch element.
The component makes use of useDisClosure to manage visibility states and useElementRect to manage the position of the toggle circle.
toggleStyle and toggleCircleStyle manage styling variants for the switch wrapper and circle.
