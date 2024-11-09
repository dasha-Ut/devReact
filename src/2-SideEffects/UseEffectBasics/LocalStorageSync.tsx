import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Counter } from '../../2-SideEffects/UseEffectBasics/Counter';
import { useCallback } from 'react';

const DELTA = 1;
const STORAGE_KEY = 'chapter-6-current-count';

export function LocalStorageSync() {
    const [count, setCount] = useLocalStorage<number | null>(STORAGE_KEY, null);

    const increase = useCallback(() => {
        setCount((prevCount) => (prevCount ?? 0) + DELTA);
    }, [setCount]);

    const decrease = useCallback(() => {
        setCount((prevCount) => (prevCount ?? 0) - DELTA);
    }, [setCount]);

    return (
        <Counter value={count} delta={DELTA} increase={increase} decrease={decrease} />

    );
}