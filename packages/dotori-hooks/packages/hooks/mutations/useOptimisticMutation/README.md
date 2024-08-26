# useOptimisticMutation

- This is a hook that returns a mutation using `useMutation` from React Query for **optimistic updates**.

<br/>

## Features

- It returns the same values as `useMutation` from React Query

<br/>

## Types

```typescript
const useOptimisticMutation: <DataType, VariableType>({ mutationKey, mutationFn, onMutate, }: Required<Pick<MutationOptions<DataType, Error, VariableType, DataType>, "mutationKey" | "mutationFn"> & {
    onMutate: (previousValues: DataType | undefined, variables: VariableType) => DataType;
}>) => UseMutationResult<...>
```

<br/>

## Example

```typescript
const useRemoveCardMutation = () => {
  useOptimisticMutation<{}[]>({
    queryKey: [QUERY_KEY.CARDS],
    mutationFn: removeCard,
    onMutate(cards, removedCardId) {
      return cards.filter(card => card.id !== removedCardId);
    },
  });
};
```
