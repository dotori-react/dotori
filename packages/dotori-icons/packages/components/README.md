# Icon

- icon components

<br/>

## Features

- when you provide icon prop, you can get Icon component

<br/>

## Types

```typescript
type  IconProps  = {
  fullSize: boolean;
  size: '3xs' | '2xs' | 'xs' | 'sm' | 'md' |'lg' | 'xl' | '2xl' | '3xl';
  icon: keyof typeof ICON_MAP;
} extends React.ComponentPropsWithoutRef<'svg'>
```

<br/>

## Example

```typescript
const App = () => {
  // ...
  return (
    <Icon icon="check" /> // check icon component by svg file
  )
}


```
