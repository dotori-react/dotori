# useGeolocation

- you can get current geolocation

<br/>

## Features

- get current geolocation when DOM rendered.

<br/>

## Types

```typescript
const useGeolocation: () => {
  geolocation: Geolocation | null;
  error: string | null;
};
```

<br/>

## Example

```typescript
const App = () => {
  const {
    geolocation: { latitude, longitude },
  } = useGeolocation();
  // ...
};
```
