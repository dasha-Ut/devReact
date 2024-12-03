import { TextBlock } from '../../components/TextBlock/TextBlock';
//import { useRerender } from '../../hooks/useRerender';

import { Child } from './Child';
import { RandomContainer } from './RandomContainer';

const EMOJIS = ['🏍', '✈️', '🚀', '🏎'];

export function RandomRendering(): JSX.Element {
    return (
        <div>
            Random container - Components lifecycle

            <TextBlock>
                <div>
                    ℹ️ If you pass a child component to some custom container component, there is no guarantee
                    it'll be rendered.
                </div>
                <div>ℹ️ It fully depends on the rendering logic of container component.</div>
            </TextBlock>

            <RandomContainer>
                {EMOJIS.map((emoji) => (
                    <Child key={emoji} tag={emoji} />
                ))}
            </RandomContainer>
        </div >
    );
}