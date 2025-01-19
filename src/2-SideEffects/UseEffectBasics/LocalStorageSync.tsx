import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Counter } from '../../2-SideEffects/UseEffectBasics/Counter';
import { useCallback } from 'react';
import { ChapterWrapper } from '../../components/ChapterWrapper/ChapterWrapper';

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
        <ChapterWrapper title="Local storage sync" subtitle="useEffect basics">
            <Counter value={count || 0} delta={DELTA} increase={increase} decrease={decrease} />
        </ChapterWrapper>
    );
}