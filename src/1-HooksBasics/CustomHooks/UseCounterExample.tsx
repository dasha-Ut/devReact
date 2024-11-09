import { UseCounter } from '../CustomHooks/UseCounter';

function ClicksCounter(): JSX.Element {
    const { value: clicks, increase } = UseCounter(0, 5);
    const text = 'Click me! '.repeat(clicks + 1);
    return (
        <div style={{ padding: 16, cursor: 'pointer', userSelect: 'none' }} onClick={() => increase()}>
            {text}
        </div>
    );
}

function DecadePicker({ initialValue }: { initialValue: number }): JSX.Element {
    const { value: year, increase, decrease } = UseCounter(initialValue, 10);
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

export function UseCounterExample(): JSX.Element {
    return (
        <>
            <h3 style={{ padding: '20px' }}>useCounter</h3>
            <h5 style={{ padding: '20px' }}>First custom hooks</h5>

            <ClicksCounter />
            <DecadePicker initialValue={1970} />
        </>
    );
}