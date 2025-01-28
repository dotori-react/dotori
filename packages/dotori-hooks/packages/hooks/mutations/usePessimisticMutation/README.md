# usePessimisticMutation

The `usePessimisticMutation` hook is a utility wrapper around React Query's `useMutation`. It ensures that after a mutation is settled, the associated queries are invalidated, keeping the application state consistent with the backend.

## Features

- **Automatic Query Invalidation**: Automatically invalidates related queries after the mutation is settled.
- **React Query Compatible**: Fully integrates with `@tanstack/react-query`.
- **Customizable Behavior**: Extends and supports all options provided by `useMutation`.

## API

### Usage

```ts
import usePessimisticMutation from './path/to/usePessimisticMutation';
import { useQueryClient } from '@tanstack/react-query';

const ExampleComponent = () => {
  const mutation = usePessimisticMutation({
    mutationKey: ['exampleMutation'],
    mutationFn: async (data) => {
      // Perform mutation (e.g., API call)
      return await fetch('/api/example', {
        method: 'POST',
        body: JSON.stringify(data),
      }).then((res) => res.json());
    },
    onMutate: async (variables) => {
      // Optimistic updates
      console.log('Mutating with:', variables);
    },
    onError: (error) => {
      // Handle errors
      console.error('Error:', error);
    },
    onSuccess: (data) => {
      // Handle successful response
      console.log('Success:', data);
    },
    onSettled: () => {
      // Perform actions after mutation is settled
      console.log('Mutation settled.');
    },
  });

  const handleClick = () => {
    mutation.mutate({ id: 1, name: 'Example' });
  };

  return <button onClick={handleClick}>Mutate</button>;
};

```

### Parameters

The `usePessimisticMutation` hook accepts all options from the `useMutation` hook, with an additional behavior of automatically invalidating queries.

### Returned Value

The hook returns the same object as `useMutation`:

```ts
{
  mutate: (variables?: TVariables) => void;
  mutateAsync: (variables?: TVariables) => Promise<TData>;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: TData | undefined;
  error: TError | null;
  ...
}
```

### Example with Query Invalidation

```ts
const mutation = usePessimisticMutation({
  mutationKey: ['updateUser'],
  mutationFn: async userData => {
    return await api.updateUser(userData);
  },
  onSuccess: () => {
    console.log('User updated successfully!');
  },
});
```

In this example, after the mutation succeeds or fails, queries with the `['updateUser']` key will be invalidated automatically.

## Notes

- Ensure your `queryKey` matches the key used in the queries you want to invalidate.
- onSettled can still be customized, and the default behavior of query invalidation will still execute.

## Dependencies

- `@tanstack/react-query`: Required for `useMutation` and query management.
