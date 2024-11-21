import { useEffect, useRef } from 'react';

export function useUpdateEffect(callback: () => void) {
  const firstRenderRef = useRef<boolean>(true);

  // react on callback change except for the first one
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
    } else {
      callback();
    }
  }, [callback]);
}
