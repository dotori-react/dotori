# PublicRoute Component

The `PublicRoute` component is designed to restrict access to certain routes for authenticated users. It ensures that unauthenticated users can access public pages, while authenticated users are redirected to a specified route.

## Features

- **Route Restriction**: If a `token` is present, indicating that the user is authenticated, the user is redirected to the specified route (`redirectTo`).
- **Public Access**: If no `token` is provided, the requested component (`element`) is rendered, allowing access to public pages like login or sign-up forms.

## Props

### PublicRouteProps

- **token**: A string representing the authentication token. If a token is present, the user is redirected. Default is `undefined`.
- **element**: The React element to render if the user is not authenticated.
- **redirectTo**: A string representing the path to redirect authenticated users to (e.g., a dashboard or home page).

## Example

```typescript
const App = () => {
  const token = localStorage.getItem('authToken'); // Get token from local storage or other source

  return (
    <PublicRoute
      token={token}
      element={<Login />}
      redirectTo="/dashboard"
    />
  );
};

export default App;
```

## Default Behavior

- **Redirect Authenticated Users**: If a `token` is present, the user is redirected to the `redirectTo` path (typically a protected page like a dashboard).
- **Unauthenticated Access**: If no `token` is found, the public `element` (e.g., a login or sign-up page) is rendered.

## Notes

- The `PublicRoute` component leverages the `Navigate` component from `react-router-dom` to redirect authenticated users.
- This component is useful for pages like login or registration forms, which should not be accessible to users who are already logged in.
- You can combine this component with `PrivateRoute` to create a robust routing system in your application.
