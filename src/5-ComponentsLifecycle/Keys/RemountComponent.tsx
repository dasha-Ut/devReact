//import { ChapterWrapper, } from '../../components/ChapterWrapper/ChapterWrapper';
import { ColoredBlock } from '../../components/ColoredBlock/ColoredBlock';
import { LoggedLifecycle } from '../../components/LoggedLifecycle';
import { TextBlock } from '../../components/TextBlock/TextBlock';

//import { useRerender } from '../../hooks/useRerender';
import { useRef } from 'react';

export function RemountComponent(): JSX.Element {
    const keyRef = useRef<number>(0);

    keyRef.current = keyRef.current + 1;

    return (
        <div> Re-mount component, Key property
            <TextBlock>
                <div>ℹ️ You can force a component to unmount and mount again (aka re-mount).</div>
                <div>
                    ℹ️ Simply change the <code>key</code> value, and React will create a new component
                    instance.
                </div>
                <div>
                    ❗️ Note that usually you don't need to do that. It's a hack. But it could be usefull in
                    rare cases.
                </div>
            </TextBlock>

            <LoggedLifecycle key={keyRef.current} tag="Random key">
                <ColoredBlock>My key is changing every render.</ColoredBlock>
            </LoggedLifecycle>
        </div>
    );
}