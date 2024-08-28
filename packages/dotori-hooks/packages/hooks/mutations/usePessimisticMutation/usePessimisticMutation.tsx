import { MutationFunction, MutationKey, useMutation, useQueryClient } from '@tanstack/react-query';

const usePessimisticMutation = <TData, TVariables>({
  mutationKey,
  mutationFn,
}: PessimisticMutationOptions<TData, TVariables>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey,
    mutationFn,
    async onSettled() {
      return queryClient.invalidateQueries({ queryKey: mutationKey });
    },
  });
};

interface PessimisticMutationOptions<TData = unknown, TVariables = void> {
  mutationKey: MutationKey;
  mutationFn: MutationFunction<TData, TVariables>;
}

export default usePessimisticMutation;
