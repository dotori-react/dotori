# useMediaQuery

- easy to get boolean of matched viewport width size

<br/>

## Features

- you can get boolean of matched viewport width size

<br/>

## Types

```typescript
const useMediaQuery: (query: string) => boolean;
```

<br/>

## Example

```typescript
const App = () => {
  const matched = useMediaQuery('(max-width: 300px)'); // boolean
};
```
