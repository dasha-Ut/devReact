import { Button } from '../../components/Button/Button';
import { Toolbar } from '../../components/Toolbar/Toolbar';
import { useRerender } from '../../hooks/useRerender';
import { CSSProperties, useMemo } from 'react';
import { useBallPosition } from '../YouDontNeedUseEffect/useBallPosition';
import { ChapterWrapper } from 'components/ChapterWrapper/ChapterWrapper';

const MIN_STEP = 20;
const MAX_STEP = 100;

function buildStyle(left: number, top: number): CSSProperties {
    return {
        position: 'absolute',
        fontSize: 64,
        transition: 'all 0.5s ease-in-out',
        transform: `rotate(${Math.random() * 360}deg)`,
        left,
        top,
    };
}

export function YouDontNeedUseEffect() {
    const [left, top] = useBallPosition(MIN_STEP, MAX_STEP);
    // if need get value from useState, and don't need to change it between re renders 
    //- use useMemo with params which trigger change
    // will rerender ONLY when props are changed or change smth from its local state 
    const style = useMemo(() => buildStyle(left, top), [left, top]);
    const rerender = useRerender();

    return (
        <ChapterWrapper title="You don't need useEffect" subtitle="Side effects, useEffect">
            <Toolbar>
                <Button text="Click me to re-render the component" onClick={rerender} />
            </Toolbar>
            <Toolbar>Use ⬅️ ⬆️ ➡️ ⬇️ to move the ball.</Toolbar>

            <div style={{ position: 'relative' }}>
                <div style={style}>⚽️</div>
            </div>
        </ChapterWrapper>
    );
}