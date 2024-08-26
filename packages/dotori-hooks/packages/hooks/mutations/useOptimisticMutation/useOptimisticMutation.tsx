import { useQueryClient, useMutation, MutationOptions } from '@tanstack/react-query';

const useOptimisticMutation = <DataType, VariableType>({
  mutationKey,
  mutationFn,
  onMutate,
}: Required<
  Pick<MutationOptions<DataType, Error, VariableType, DataType>, 'mutationKey' | 'mutationFn'> & {
    onMutate: (previousValues: DataType | undefined, variables: VariableType) => DataType;
  }
>) => {
  const queryClient = useQueryClient();

  return useMutation<DataType, Error, VariableType, DataType>({
    mutationKey,
    mutationFn,
    async onMutate(variables) {
      await queryClient.cancelQueries({ queryKey: mutationKey });

      const previousValues = queryClient.getQueryData<DataType>(mutationKey);

      queryClient.setQueryData(mutationKey, () => onMutate(previousValues, variables));

      return previousValues;
    },
    onError(_, __, context) {
      queryClient.setQueryData(mutationKey, context);
    },
    async onSettled() {
      return queryClient.invalidateQueries({ queryKey: mutationKey });
    },
  });
};

export default useOptimisticMutation;
