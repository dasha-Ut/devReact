import { useInterval } from '../../hooks/useInterval';
import { useState } from 'react';

interface Props {
    emojis: string[];
    delay: number;
    fontSize: number;
}

export function AnimatedEmoji({ emojis, delay, fontSize }: Props): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useInterval(() => {
        setCurrentIndex((value) => {
            const newValue = value + 1;
            return newValue >= emojis.length ? 0 : newValue;
        });
    }, delay);

    return <div style={{ fontSize }}>{emojis[currentIndex]}</div>;
}