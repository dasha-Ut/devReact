import { ChangeEventHandler, useState } from 'react';

const FIBONACCI = [1, 1];

export function UseStateBasics(): JSX.Element {
    const [clicks, setClicks] = useState<number>(0);
    const [isClicksVisible, setClicksVisible] = useState<boolean>(true);
    const [someText, setSomeText] = useState<string>('');
    const [fibonacci, setFibonacci] = useState<number[]>(FIBONACCI);

    const incrementCounter = () => setClicks(clicks + 1);
    const showClicks = () => setClicksVisible(true);
    const hideClicks = () => setClicksVisible(false);

    const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setSomeText(event.target.value);
    };
    const clearText = () => setSomeText('');

    const addFibonacci = () => {
        const copy = [...fibonacci];
        const lastIdx = copy.length - 1;
        copy.push(copy[lastIdx] + copy[lastIdx - 1]);
        setFibonacci(copy);
    };

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ border: '1px' }}>
                <label>
                    {isClicksVisible ? clicks : '?'}
                </label>
                <button onClick={incrementCounter} >
                    Increment counter
                </button>
                <button onClick={showClicks} disabled={isClicksVisible}>
                    Show clicks
                </button>
                <button onClick={hideClicks} disabled={!isClicksVisible}>
                    Hide clicks
                </button>
            </div>

            <div style={{ border: '1px' }}>
                <input type="text" value={someText} onChange={onInputChange} />
                <button onClick={clearText} >
                    Clear
                </button>
            </div>

            <div style={{ border: '1px' }}>
                <button onClick={addFibonacci} >
                    Add Fibonacci number
                </button>
            </div>
            <div>Fibonacci sequence: {fibonacci.join(', ')}</div>
        </div>
    );
}