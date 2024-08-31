# cn

- This is a utility function that helps manage classNames conveniently in TailwindCSS.

<br/>

## settings

- To enable the `TailwindCSS IntelliSense` extension for the `cn` utility function, please add the following settings.

```json
"tailwindCSS.experimental.classRegex": [
  ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
]
```

## Features

- The `cn` utility function can be used similarly to the `cva` utility function from the `class-variance-authority` library.
- To prevent conflicts when multiple styles overlap, the twMerge of `tailwind-merge` library is used, ensuring that the last style takes precedence.
- Additionally, to make it easier to apply conditional styles when setting default classes, the `cx` utility function from the `class-variance-authority` library, which is based on `clsx`, is utilized."

<br/>

## Types

```typescript
const cn: <T>(base?: ClassValue, config?: Config<T> | undefined) => (props?: Props<T> | undefined) => string;
```

<br/>

## Example

```typescript
const avatarStyle = cn(
  'flex items-center justify-center overflow-hidden text-nowrap rounded-full border-2 border-gray-700 bg-gray-100 bg-cover',
  {
    variants: {
      size: {
        xs: 'h-5 w-5 text-4xs',
        sm: 'h-7 w-7 text-3xs',
        md: 'h-10 w-10 text-xs',
        lg: 'h-14 w-14 text-sm',
        xl: 'h-20 w-20 text-md',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  },
);
```
