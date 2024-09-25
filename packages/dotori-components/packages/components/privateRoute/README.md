# PrivateRoute Component

The `PrivateRoute` component restricts access to certain routes based on the presence of an authentication token. It is used to ensure that only authenticated users can access certain parts of your application.

## Features

- **Route Protection**: The component checks if a `token` is present. If the token exists, the requested component (`element`) is rendered. If not, the user is redirected to the specified path (`redirectTo`).
- **Redirects Unauthenticated Users**: If no `token` is provided, the user is redirected to a login page or another specified route.

## Props

### PrivateRouteProps

- **token**: A string representing the authentication token. If the token is not provided or is `undefined`, the user will be redirected. Default is `undefined`.
- **element**: The React element to render if the user is authenticated.
- **redirectTo**: A string representing the path to redirect unauthenticated users to (e.g., a login page).

## Example

```typescript
import React from 'react';
import PrivateRoute from './path/to/PrivateRoute';
import Dashboard from './path/to/Dashboard';

// Example: Protecting the Dashboard route
const App = () => {
  const token = localStorage.getItem('authToken'); // Get token from local storage or other source

  return (
    <PrivateRoute
      token={token}
      element={<Dashboard />}
      redirectTo="/login"
    />
  );
};

export default App;
```

## Default Behavior

- **Authenticated Access**: If the `token` prop is provided, the `element` is rendered.
- **Redirect on Missing Token**: If no `token` is found, the user is redirected to the `redirectTo` path.

## Notes

- The `PrivateRoute` component relies on the `Navigate` component from `react-router-dom` for redirecting users.
- You can use this component to protect any route or part of your application that should only be accessible to authenticated users.
- Make sure to handle token retrieval securely, such as from cookies or local storage, depending on your application's authentication strategy.
