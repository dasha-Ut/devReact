import { useCounter } from './UseCounter';
import { ChapterWrapper } from 'components/ChapterWrapper/ChapterWrapper';
function ClicksCounter() {
    const { value: clicks, increase } = useCounter(0, 5);
    const text = 'Click me! '.repeat(clicks + 1);
    return (
        <div style={{ padding: 16, cursor: 'pointer', userSelect: 'none' }} onClick={() => increase()}>
            {text}
        </div>
    );
}

function DecadePicker({ initialValue }: { initialValue: number }) {
    const { value: year, increase, decrease } = useCounter(initialValue, 10);
    return (
        <div style={{ padding: 10 }}>
            <div style={{ fontSize: 24 }}>Pick a decade:</div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <button onClick={() => decrease()} >
                    ➖
                </button>
                <div>  {`${year}'s`} </div>
                <button onClick={() => increase()} >
                    ➕
                </button>
            </div>
        </div>
    );
}

export function UseCounterExample() {
    return (
        <ChapterWrapper title="useCounter" subtitle="First custom hooks">
            <ClicksCounter />
            <DecadePicker initialValue={1970} />
        </ChapterWrapper>
    );
}