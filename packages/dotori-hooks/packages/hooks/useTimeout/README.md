# useTimeout

- You can use `setTimeout` as a hook.

<br/>

## Features

- It accepts a callback function and milliseconds as parameters, allowing it to be used in the same way as the `setTimeout` method.

<br/>

## Types

```typescript
interface UseTimeoutParams {
  callback: () => void;
  milliseconds: number;
}

const useTimeout: ({ callback, milliseconds }: UseTimeoutParams) => void;
```

<br/>

## Example

```typescript
const Snackbar = (/**...**/) => {
  const { isOpen, close } = useDisClosure(true);
  useTimeout({ callback: close, milliseconds: delay });
};
```
