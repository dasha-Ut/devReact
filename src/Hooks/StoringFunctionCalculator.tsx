import { Button } from "../components/Button/Button";
import { ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react';
import { useMergedState } from '../Hooks/CustomHooks/useMergedState';

type MathFunction = (a: number, b: number) => number;
type Setter = Dispatch<SetStateAction<number>>;

interface CalculatorBtn {
    fn: MathFunction;
    name: string;
    icon: string;
}

const buildOnChange = (setter: Setter): ChangeEventHandler<HTMLInputElement> => {
    return (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setter(value ? parseFloat(value) : 0);
    };
};

const add: CalculatorBtn = {
    fn: (a: number, b: number) => a + b,
    name: '➕ add',
    icon: '➕'
}

const subtract: CalculatorBtn = {
    fn: (a: number, b: number) => a - b,
    name: '➖ subtract',
    icon: '➖'
};

const divide: CalculatorBtn = {
    fn: (a: number, b: number) => a / b,
    name: '➗ divide',
    icon: '➗'
};

const multiply: CalculatorBtn = {
    fn: (a: number, b: number) => a * b,
    name: '✖️ multiply',
    icon: '✖️'
}


export function Calculator(): JSX.Element {
    const [data, setData] = useMergedState<CalculatorBtn>(add);
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);


    const buildClickHandler = (item: CalculatorBtn) => {
        return () => {
            setData(item);
        };
    }

    return (
        <>
            <div style={{ paddingTop: 19 }}>
                <Button onClick={buildClickHandler(add)} disabled={false} text={add.name}></Button>
                <Button onClick={buildClickHandler(subtract)} disabled={false} text={subtract.name}></Button>
                <Button onClick={buildClickHandler(divide)} disabled={false} text={divide.name}></Button>
                <Button onClick={buildClickHandler(multiply)} disabled={false} text={multiply.name}></Button>
            </div>

            <div style={{ paddingTop: 19 }}>
                <input type="number" value={a} onChange={buildOnChange(setA)} />

                <div style={{ minWidth: 10, textAlign: 'center' }}>{data.icon}</div>

                <input type="number" value={b} onChange={buildOnChange(setB)} />

                <span> = {data.fn ? data.fn(a, b) : ''}</span>
            </div>
        </>
    )
}