import { Button } from '../../components/Button/Button';
import { useState } from 'react';
import { HeaderRow } from '../LazyInitialisation/HeaderRow';
import { Row } from '../LazyInitialisation/Row';

const MAX_NUMBER = 30;
const MAX_POWER = 5;

type Matrix = number[][];

function buildMatrix(maxNumber: number, maxPow: number): Matrix {
    const data = [];
    for (let i = 0; i < maxNumber; i++) {
        const record = new Array(maxPow);
        for (let pow = 1; pow <= maxPow; pow++) {
            record[pow - 1] = Math.pow(i, pow);
        }
        data.push(record);
    }
    return data;
}

function getRowId(row: number[]): number {
    return row[0];
}

export function LazyInitialization(): JSX.Element {
    const [data, setData] = useState<Matrix>(() => {
        console.log('useState', 'init');
        const matrix = buildMatrix(MAX_NUMBER, MAX_POWER);
        console.log('martix');
        return matrix;
    });

    const shuffle = () =>
        setData((prevValue) => {
            const copy = [...prevValue];
            copy.sort(() => (Math.random() > 0.5 ? 1 : -1));
            return copy;
        });

    const sortAscending = () =>
        setData((prevValue) => {
            const copy = [...prevValue];
            copy.sort((a, b) => getRowId(a) - getRowId(b));
            return copy;
        });

    const sortDescending = () =>
        setData((prevValue) => {
            const copy = [...prevValue];
            copy.sort((a, b) => getRowId(b) - getRowId(a));
            return copy;
        });

    const removeRow = (rowId: number) =>
        setData((prevValue) => {
            return prevValue.filter((row) => getRowId(row) !== rowId);
        });

    return (
        <>
            <h3 style={{ paddingTop: 19 }}>Lazy initialization</h3>
            <h5>Hooks basics, useState </h5>
            <div>
                <Button text="⬆️ Sort" onClick={sortAscending} />
                <Button text="⬇️ Sort" onClick={sortDescending} />
                <Button text="🔀 Shuffle" onClick={shuffle} />
            </div>

            <table>
                <thead>
                    <HeaderRow maxPower={MAX_POWER} />
                </thead>
                <tbody>
                    {data.map((row) => (
                        <Row key={getRowId(row)} rowId={getRowId(row)} array={row} onClick={removeRow} />
                    ))}
                </tbody>
            </table>
        </>
    );
}