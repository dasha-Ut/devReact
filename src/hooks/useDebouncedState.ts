import { debounce } from 'lodash';
import { useMemo, useState } from 'react';

export function useDebouncedState<T>(initialValue: T, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

    const setter = useMemo(() => {
       return debounce((newValue: T) => setDebouncedValue(newValue), delay);
    }, [delay]);

    return [debouncedValue, setter] as const;
}