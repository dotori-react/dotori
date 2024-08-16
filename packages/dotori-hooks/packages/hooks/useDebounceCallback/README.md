# useDebounceCallback

- easy to use debounce function

<br/>

## Features

- allow params

<br/>

## Types

```typescript
interface UseDebounceCallbackParams extends DebounceOptions {
  callback: (...args: any[]) => void;
}

interface DebounceOptions {
  delay?: number;
}

const useDebounceCallback: ({ callback, ...options }: UseDebounceCallbackParams) => (...args: any[]) => void;
```

<br/>

## Example

```typescript
const ScrollToTop = () => {
  const debounced = useDebounceCallback({
    callback: () => {
      (showedMinHeight >= window.scrollY ? close : open)();
    },
  });

  useEffect(() => {
    window.addEventListener('scroll', debounced);

    return () => {
      window.removeEventListener('scroll', debounced);
    };
  }, [debounced]);
};
```
