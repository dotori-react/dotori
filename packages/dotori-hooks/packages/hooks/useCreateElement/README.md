# useCreateElement

- easy to create element

<br/>

## Features

- create element after DOM rendered

<br/>

## Types

```typescript
type HTMLElementProperties<T extends HTMLElement> = {
  [K in keyof T]: T[K];
};

interface UseCreateElementProps<T extends keyof HTMLElementTagNameMap> {
  tagName: T;
  attributes: Partial<HTMLElementProperties<HTMLElementTagNameMap[T]>>;
  options?: { target?: HTMLElement };
}

const useCreateElement: <T extends keyof HTMLElementTagNameMap>(
  createElements: UseCreateElementProps<T> | UseCreateElementProps<T>[],
) => void;
```

<br/>

## Example

```typescript
const ModalComponent = () => {
  const { count, increment, decrement, set, reset } = useCount({ min: 5, max: 10 });
  useCreateElement([
    { tagName: 'div', attributes: { id: 'modal' }, options: { target: document.getElementById('root') } },
  ]);
};
```
