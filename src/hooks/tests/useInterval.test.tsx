import { render, screen } from "@testing-library/react";
import { useInterval } from "hooks/useInterval";
import { useState } from "react"

function TestComponent() {
    const [count, setCount] = useState<number>(0);
    useInterval(() => setCount((value) => value + 1), 50);

    return <div>{`Counter: ${count}`}</div>
}

describe('useInteval hook', () => {
    test('should change counter over time', async () => {
        render(<TestComponent />);

        expect(await screen.findByText('Counter: 0')).toBeVisible;
        expect(await screen.findByText('Counter: 3')).toBeVisible;
        expect(await screen.findByText('Counter: 4')).toBeVisible;
    })
})