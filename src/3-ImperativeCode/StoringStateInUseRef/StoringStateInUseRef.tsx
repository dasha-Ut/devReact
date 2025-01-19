import { useCounter } from '../../1-HooksBasics/CustomHooks/UseCounter';
import { useLoggedLifecycle } from '../../hooks/useLoggedLifecycle';
import { logTagged } from '../../utils/logTagged';
import { ValueLabel } from '../../components/ValueLabel/ValueLabel';
import { Button } from "../../components/Button/Button";
import { Toolbar } from '../../components/Toolbar/Toolbar';
import { useRefState } from './useRefState';
import { useUpdateEffect } from './useUpdateEffect';
import { ChapterWrapper } from '../../components/ChapterWrapper/ChapterWrapper';

export function StoringStateInUseRef() {
    const { value: stateClicks, increase: increaseStateClicks } = useCounter();
    // useRef don't update render
    const [refStateClicks, setRefStateClicks] = useRefState<number>(0);

    useLoggedLifecycle('Main');

    useUpdateEffect(() => {
        logTagged('useUpdateEffect', `value: ${stateClicks}`);
    }, [stateClicks]);

    const increaseRefStateClicks = () => {
        setRefStateClicks((value) => value + 1);
        logTagged('useRefState', 'increase ref state');
    };

    return (
        <ChapterWrapper title="Storing state in useRef" subtitle="useUpdateEffect">
            <div>useState clicks:</div>
            <Toolbar>
                <ValueLabel value={stateClicks} minWidth="100px" />
                <Button text="+1" onClick={increaseStateClicks} />
            </Toolbar>

            <div>useRefState clicks:</div>
            <Toolbar>
                <ValueLabel value={refStateClicks} minWidth="100px" />
                <Button text="+1" onClick={increaseRefStateClicks} />
            </Toolbar>
        </ChapterWrapper>
    );
}