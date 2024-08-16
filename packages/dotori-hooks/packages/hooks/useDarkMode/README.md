# useDarkMode

- easy to store darkMode in localStorage

<br/>

## Features

- useDarkMode use zustand because of code clean

<br/>

## Types

```typescript
const useDarkMode: () => {
  isDark: boolean;
  on: () => void;
  off: () => void;
  toggle: () => void;
};
```

<br/>

## Example

```typescript
const ModalComponent = () => {
  const { isDark, on, off, toggle } = useDarkMode();

  return (
    <div>{isDark: {JSON.stringify(isDark)}}</div>
    <button onClick={on}>darkMode on</button>
    <button onClick={off}>darkMode off</button>
    <button onClick={toggle}>darkMode toggle</button>
  )
};
```
