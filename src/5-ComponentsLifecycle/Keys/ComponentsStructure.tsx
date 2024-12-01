import { EmojiButton } from '../../components/EmojiButton/EmojiButton';
import { LoggedLifecycle } from '../../components/LoggedLifecycle';
import { TextBlock } from '../../components/TextBlock/TextBlock';
import { Toolbar } from '../../components/Toolbar/Toolbar';

import { useToggle } from '../../hooks/useToggle';

export function ComponentsStructure(): JSX.Element {
    const [isToggled, toggle] = useToggle(true);

    const hedgehog = (
        <LoggedLifecycle key="🦔" tag="🦔">
            <EmojiButton emoji="🦔" onClick={toggle} />
        </LoggedLifecycle>
    );

    return (
        <div>Components structure ,Key property
            <TextBlock>
                <div>
                    ℹ️ <code>key</code> property only makes sense in the scope of a single parent.
                </div>
                <div>ℹ️ Changes in a components tree will cause mounts and unmounts.</div>
            </TextBlock>

            <h3>{isToggled ? 'Click the hedgehog!' : 'Nicely done! Now do it again.'}</h3>
            <Toolbar>
                {isToggled ? hedgehog : <div style={{ transform: 'scaleX(-1)' }}>{hedgehog}</div>}
            </Toolbar>
        </div>
    );
}