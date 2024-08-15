# useClipboard

- easy to copy clipboard

<br/>

## Features

- when clipboard not supported then warning on console

```js
console.warn('Clipboard not support!');
```

- you can get `copiedText` after DOM rendered

<br/>

## Types

```typescript
const useClipboard: () => {
  copiedText: string | null;
  error: string | null;
  copy: (text: string) => Promise<boolean>;
  read: () => Promise<string | null>;
};
```

<br/>

## Example

```typescript
const App = () => {
  const { copiedText, error, copy, read } = useClipboard();

  return (
    <button onClick={() => {copy('copy clipboard!')}}>copy clipboard</button>
    <button onClick={read}>copiedTextGet</button>
    <p>{copiedText}</p>
    <p>{error}</p>
  )

}


```
