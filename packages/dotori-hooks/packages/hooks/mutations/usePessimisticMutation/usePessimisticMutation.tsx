import { DefaultError, useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';

const usePessimisticMutation = <TData = unknown, TError = DefaultError, TVariables = void, TContext = unknown>(
  options: UseMutationOptions<TData, TError, TVariables, TContext>,
) => {
  const queryClient = useQueryClient();

  return useMutation<TData, TError, TVariables, TContext>({
    ...options,
    async onSettled(...params) {
      if (options.onSettled) options.onSettled(...params);
      await queryClient.invalidateQueries({ queryKey: options.mutationKey });
    },
  });
};

export default usePessimisticMutation;
