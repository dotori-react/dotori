# usePessimisticMutation

- This is a hook that returns a mutation using `useMutation` from React Query for **pessimistic updates**.
- This hook is useful when obtaining real data is more important than user experience, even if the user experience might be lacking.

<br/>

## Features

- It returns the same values as `useMutation` from React Query

<br/>

## Types

```typescript
const usePessimisticMutation: <TData, TVariables>({
  mutationKey,
  mutationFn,
}: PessimisticMutationOptions<TData, TVariables>) => UseMutationResult<TData, Error, TVariables, unknown>;
```

<br/>

## Example

```typescript
const useAddAddressMutation = () =>
  usePessimisticMutation({
    queryKey: QUERY_KEY.ADDRESSES,
    mutationFn: addAddress,
  });
```
