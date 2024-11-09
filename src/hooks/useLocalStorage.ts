import { useCallback, useState } from 'react';


export type UseLocalStorage<T> = [T | null, (newValue: T | ((prev: T | null) => T)) => void];

export function useLocalStorage<T>(key: string, initialValue: T | null): UseLocalStorage<T> {
  const [storedValue, setStoredValue] = useState<T | null>(() => {
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (newValue: T | ((prev: T | null) => T)) => {
      try {
        const valueToStore = newValue instanceof Function ? newValue(storedValue) : newValue;

        // Handle undefined by not storing it
        if (valueToStore === undefined) {
          return;
        }

        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        setStoredValue(valueToStore);
      } catch (error) {
        console.error(error);
      }
    },
    [key, storedValue]
  );

  return [storedValue, setValue];
}