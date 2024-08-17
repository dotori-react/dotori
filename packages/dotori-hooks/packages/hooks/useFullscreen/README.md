# useFullscreen

- easy to enter full screen

<br/>

## Features

- provide full screen enter, exit and isFullScreen boolean value
- To enable full screen functionality, the ref must be passed to the element.

<br/>

## Types

```typescript
const useFullscreen: <T extends HTMLElement>() => {
  ref: React.MutableRefObject<T | null>;
  isFullScreen: boolean;
  enter: () => Promise<boolean>;
  exit: () => Promise<boolean>;
};
```

<br/>

## Example

```typescript
const App = () => {
  const { ref, isFullScreen, enter, exit } = useGeolocation();

  return (
    <img src="https://placehold.co/600x400" ref={ref} />
    <button onClick={enter}>enter fullScreen</button>
  )
};
```
