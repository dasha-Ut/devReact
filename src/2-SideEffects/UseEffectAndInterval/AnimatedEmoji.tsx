
import { useState, useEffect } from 'react';

interface Props {
    emojis: string[];
    delay: number;
    fontSize: number;
}

export function AnimatedEmoji({ emojis, delay, fontSize }: Props): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((value) => {
                const newValue = value + 1;
                return newValue >= emojis.length ? 0 : newValue;
            });
        }, delay);

        return () => {
            clearInterval(intervalId);
        };
    }, [delay, emojis.length]);

    return <div style={{ fontSize }}>{emojis[currentIndex]}</div>;
}
