import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useDocumentTitle } from "hooks/useDocumentTitle";
import { useInterval } from "hooks/useInterval";
import { useState } from "react";

function TestComponent() {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount((value) => value + 1);
    useDocumentTitle(count.toString());
    return <button onClick={increment}>increment</button>;
}

describe('useDocumentTitle', () => {
    test('Document title updates', async () => {
        render(<TestComponent />);

        expect(document.title).toBe('0');

        await userEvent.click(screen.getByText('increment'));

        expect(document.title).toBe('1');
    });
})