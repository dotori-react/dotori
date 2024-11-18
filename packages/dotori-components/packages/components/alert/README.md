# Alert

The Alert component is a versatile and customizable alert box designed to display messages with an optional icon, title, and close button. It can be styled with various colors to indicate different statuses (`e.g., warning, info, success, etc.`).

## Features

- **Customizable Alert Box**: The Alert component supports flexible content, including an icon, title, and children for the message body.
- **Color Variants**: You can choose from multiple color variants to convey different types of alerts.
- **Closable**: Includes a close button with a customizable onClick event handler for closing the alert.
- **Visibility Control**: The isOpen prop controls whether the alert is displayed or hidden.
-

## Props

### AlertProps

- **isOpen** (boolean, required): Controls the visibility of the alert. If `true`, the alert is visible.
- **close** (function, required): Callback function to close the alert when the close button is clicked.
- **title** (string, required): The title text displayed within the alert.
- **icon** (React.ReactNode, optional): An optional icon element to display within the alert.
- **color** (`'blue' | 'gray' | 'green' | 'red' | 'yellow'`, optional): The color variant for styling the alert. Defaults to `'gray'`.
- **className** (string, optional): Additional custom class names for the alert container.
- Other props from `React.ComponentPropsWithoutRef<'section'>` can be used, such as style, event handlers, etc.

## Example Usage

```ts
import React, { useState } from 'react';
import { Alert } from 'dotori-components';

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Alert
      isOpen={isOpen}
      close={() => setIsOpen(false)}
      title="Information Alert"
      icon={<span>🔔</span>}
      color="blue"
    >
      This is an informational alert message.
    </Alert>
  );
};
```

## How It Works

- **Visibility**: The isOpen prop determines whether the alert is displayed. When false, the alert is not rendered.
- **Closing the Alert**: The close prop is a function that is called when the close button is clicked.
- **Styling Variants**: The alertStyle, titleStyle, and iconStyle functions manage styling based on the color variant passed in props.
