import { ColoredBlock } from '../../components/ColoredBlock/ColoredBlock';
import { LoggedLifecycle } from '../../components/LoggedLifecycle';
import { TextBlock } from '../../components/TextBlock/TextBlock';
//import { useRerender } from 'hooks/useRerender';
import { memo, useCallback, useMemo } from 'react';

import { MemoRenderFunc } from './MemoRenderFunc';
import { MemoText } from './MemoText';

const MemoLoggedLifecycle = memo(LoggedLifecycle);

export function LifecycleAndMemoization(): JSX.Element {
    // const rerender = useRerender();

    // memoized JSX Element
    const useMemoText = useMemo(
        () => <MemoText tag="4. useMemoText" text="4. Text wrapped with useMemo" />,
        []
    );

    const renderFunc = () => (
        <LoggedLifecycle tag="5. Render func">5. Text rendered with render function</LoggedLifecycle>
    );

    const memoizedRenderFunc = useCallback(
        () => (
            <LoggedLifecycle tag="6. useCallback(render func)">
                6. Text rendered with memoized render function
            </LoggedLifecycle>
        ),
        []
    );

    return (
        <div> Memoization - subtitle- Components lifecycle
            <TextBlock>
                <div>ℹ️ Each of these lines was rendered in a different way.</div>
                <div>ℹ️ You can achieve similar results in so many different ways with React.</div>
            </TextBlock>


            // will not rerender, props are not changed, doesnt have inner state
            <ColoredBlock>
                <MemoLoggedLifecycle tag="1. Static text parent">
                    1. Just a static text here. // type = string
                </MemoLoggedLifecycle>

                // will rerender, doesnt have inner state, BUT props are changed(childred),
                <MemoLoggedLifecycle tag="1.1 Static text parent with tag">
                    1. Just a <strong>static</strong> text here. // type = JSX Element
                </MemoLoggedLifecycle>


              // wil rerender,
                <MemoLoggedLifecycle tag="2. Span parent">
               // childred is one of props, children is JSX Element, every time its create again
                    <div>
                        2. <strong>&lt;span&gt;</strong>Also text, but inside span
                        <strong>&lt;/span&gt;</strong>
                    </div>
                </MemoLoggedLifecycle>

                // wil rerender, children is literal JSX Element, even memoized
                <MemoLoggedLifecycle tag="3. MemoText parent">
                    <MemoText tag="3. MemoText" text="3. Memoized text component" />
                </MemoLoggedLifecycle>

                // will not rerender, children was memoized separately
                <MemoLoggedLifecycle tag="4. useMemoText parent">{useMemoText}</MemoLoggedLifecycle>

               // wil rerender, prop renderFunc will change between rerenders, as literal of fn
                <MemoRenderFunc tag="5. MemoRenderFunc" renderContent={renderFunc} /> // renderFunc - fn that returns JSX Element
                <br />

                // will not rerender, children was memoized separately (fn is memoized)
                <MemoRenderFunc tag="6. MemoRenderFunc" renderContent={memoizedRenderFunc} />
                <br />
            </ColoredBlock>
        </div>
    );
}