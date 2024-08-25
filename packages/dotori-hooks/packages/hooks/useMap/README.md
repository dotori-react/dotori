# useMap

- It provides the JavaScript Map object as a hook.

<br/>

## Features

- It provides the add function for adding a value to the Map object and the adds function for adding multiple values.
- It also provides the get function to check if a value exists in the Map object.
- The update function is available for modifying the value of a specific key in the Map object.
- Additionally, it includes the remove function to delete a value for a specific key and the clear function to reset the Map object.

\* The useMap hook requires generics for the key and value.

<br/>

## Types

```typescript
const useMap: <K, V>(
  defaultMap?: Map<K, V>,
) => {
  formattedArray: any[];
  map: any;
  get: any;
  add: any;
  adds: any;
  update: any;
  remove: any;
  clear: any;
};
```

<br/>
