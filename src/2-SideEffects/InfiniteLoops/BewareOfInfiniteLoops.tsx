import { useEffect, useState } from 'react';

import { EmojisBar } from '../InfiniteLoops/EmojisBar';

const EMOJIS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐻‍❄️', '🐨'];

export function BewareOfInfiniteLoops(): JSX.Element {
    const [topEmojis, setTopEmojis] = useState<string[]>(EMOJIS);
    const [bottomEmojis, setBottomEmojis] = useState<string[]>([]);

    const addToBottom = (emoji: string) => {
        setTopEmojis((array) => array.filter((e) => e !== emoji))
        setBottomEmojis((array) => [...array, emoji]);
    };

    const addToTop = (emoji: string) => {
        setBottomEmojis((array) => array.filter((e) => e !== emoji))
        setTopEmojis((array) => [...array, emoji]);
    };

    // ! these two effects will trigger an infinite update loop
    // useEffect(() => {
    //     setTopEmojis((array) => array.filter((emoji) => !bottomEmojis.includes(emoji)));
    // }, [bottomEmojis]);

    // useEffect(() => {
    //     setBottomEmojis((array) => array.filter((emoji) => !topEmojis.includes(emoji)));
    // }, [topEmojis]);

    return (
        <>
            <EmojisBar emojis={topEmojis} onClick={addToBottom} />
            <EmojisBar emojis={bottomEmojis} onClick={addToTop} />
        </>
    )
}