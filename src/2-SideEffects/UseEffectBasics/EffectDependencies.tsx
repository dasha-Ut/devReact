import { useCounter } from '../../1-HooksBasics/CustomHooks/UseCounter';
import { Toolbar } from '../../components/Toolbar/Toolbar';
import { useEffect, useState } from 'react';
import { logTagged } from '../../utils/logTagged';
import { ChapterWrapper } from '../../components/ChapterWrapper/ChapterWrapper';
import { Counter } from '../../2-SideEffects//UseEffectBasics/Counter';

const DELTA = 1;

export function EffectDependencies() {
    const { value, increase, decrease } = useCounter(0, DELTA);
    const [inputValue, setInputValue] = useState<string>('Count:');

    useEffect(() => {
        logTagged('Effect', `running effect ${value}`);

        // optional cleanup function
        return () => {
            logTagged('Effect', `cleaning up ${value}`);
        };
    }, [value]);

    useEffect(
        function updateDocTitle() {
            document.title = `${inputValue} ${value}`;
        },
        [inputValue, value]
    );

    return (
        <ChapterWrapper title="Effect dependencies" subtitle="useEffect basics">
            <Counter value={value} delta={DELTA} increase={increase} decrease={decrease} />
            <Toolbar>
                <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
            </Toolbar>
        </ChapterWrapper>

    );
}