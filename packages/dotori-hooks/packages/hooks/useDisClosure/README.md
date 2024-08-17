# useDisClosure

- handle common open, close, toggle and isOpen value

<br/>

## Features

- you can get by destructuring assignment

<br/>

## Types

```typescript
const useDisClosure: (initialIsOpen?: boolean) => {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};
```

<br/>

## Example

```typescript
const App = () => {
  const { isOpen, close } = useDisClosure(true);
};
```
