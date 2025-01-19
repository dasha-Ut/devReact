import { useCounter } from '1-HooksBasics/CustomHooks/UseCounter';
import { Button } from '../../components/Button/Button';
import { ChapterWrapper } from '../../components/ChapterWrapper/ChapterWrapper';
import { Toolbar } from '../../components/Toolbar/Toolbar';
import { ValueLabel } from '../../components/ValueLabel/ValueLabel';
import { useLoggedLifecycle } from 'hooks/useLoggedLifecycle';
import { useCallback, useEffect } from 'react';
import { logTagged } from 'utils/logTagged';
import { useUpdateEffect } from './useUpdateEffect';

export function UseUpdateEffect() {
    const { value, increase } = useCounter();

    useLoggedLifecycle('Parent');

    useEffect(() => {
        logTagged('useEffect', 'effect with empty deps list');
    }, []);

    useUpdateEffect(
        useCallback(() => {
            logTagged('updateEffect', `value === ${value}`);
        }, [value]),
    );

    return (
        <ChapterWrapper title="useCallback" subtitle="useUpdateEffect">
            <Toolbar>
                <ValueLabel value={value} minWidth="100px" />
                <Button text="+1" onClick={increase} />
            </Toolbar>
        </ChapterWrapper>
    );
}