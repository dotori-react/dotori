import { useCallback, useState } from 'react';

const clipboard = navigator.clipboard ?? null;

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const copy = useCallback(async (text: string) => {
    if (!clipboard) {
      console.warn('Clipboard not support!');

      return false;
    }

    try {
      await clipboard.writeText(text);
      setIsCopied(true);
      setError(null);

      return true;
    } catch (err) {
      setIsCopied(false);
      setError(JSON.stringify(err));

      return false;
    }
  }, []);

  const read = useCallback(async () => {
    if (!clipboard) {
      console.warn('Clipboard not support!');

      return false;
    }

    try {
      const data = await clipboard.readText();

      setIsCopied(true);
      setError(null);
      return data;
    } catch (err) {
      setIsCopied(false);
      setError(JSON.stringify(err));
    }

    return null;
  }, []);

  return { copy, read, isCopied, error };
};

export default useClipboard;
