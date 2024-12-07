import { useReducer } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
function createNewObject(): {} | null {
  return {};
}

export function useRerender() {
  const [, rerender] = useReducer(createNewObject, null);

  return rerender;
}