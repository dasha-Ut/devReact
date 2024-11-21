import { UseCounter } from '../../1-HooksBasics/CustomHooks/UseCounter';
import { Button } from '../../components/Button/Button';
import { Toolbar } from '../../components/Toolbar/Toolbar';
import { ValueLabel } from '../../components/ValueLabel/ValueLabel';

import { useLoggedLifecycle } from '../../hooks/useLoggedLifecycle';
import { useCallback, useEffect } from 'react';
import { logTagged } from '../../utils/logTagged';

import { useUpdateEffect } from '../UseUpdateEffect/useUpdateEffect';

export function UseUpdateEffect(): JSX.Element {
    const { value, increase } = UseCounter();

    useLoggedLifecycle('Parent');

    useEffect(() => {
        logTagged('useEffect', 'effect with empty deps list');
    }, []);

    useUpdateEffect(
        // MEMO - don't rerender, if props [] dont change
        useCallback(() => {
            logTagged('updateEffect', `value === ${value}`);
        }, [value])
    );

    return (
        <div>
            <Toolbar>
                <ValueLabel value={value} minWidth="100px" />
                <Button text="+1" onClick={increase} />
            </Toolbar>
        </div>
    );
}