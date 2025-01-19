import { useCallback, useEffect, useState } from 'react';

const clipboard = navigator.clipboard ?? null;

const useClipboard = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const copy = useCallback(async (text: string) => {
    if (!clipboard) {
      console.warn('Clipboard not support!');
      return false;
    }

    try {
      await clipboard.writeText(text);

      setError(null);
      setCopiedText(text);

      return true;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('clipboard can\t copy');
      }
    }

    return false;
  }, []);

  const read = useCallback(async () => {
    if (!clipboard) {
      console.warn('Clipboard not support!');

      return null;
    }

    try {
      const text = await clipboard.readText();

      setError(null);
      setCopiedText(text);

      return text;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("clipboard can't read");
      }
    }

    return null;
  }, []);

  useEffect(() => {
    void (async () => {
      const text = await read();
      setCopiedText(text);
    })();
  }, [read]);

  return { copiedText, error, copy, read };
};

export default useClipboard;
