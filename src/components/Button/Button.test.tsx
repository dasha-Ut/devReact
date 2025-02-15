import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {

    test('click handler should be called on click', async () => {
        const clickHandler = vi.fn();

        render(<Button onClick={clickHandler} text="Click me" />)

        expect(screen.getByText("Click me")).toBeVisible();

        await userEvent.click(screen.getByText("Click me"));

        expect(clickHandler).toHaveBeenCalledTimes(1);
    })

    test('click handler should not be called when disabled', async () => {
        const clickHandler = vi.fn();

        render(<Button onClick={clickHandler} text="Click me" disabled />)

        expect(screen.getByText("Click me")).toBeVisible();

        await userEvent.click(screen.getByText("Click me"));

        expect(clickHandler).not.toHaveBeenCalledTimes(1);
    })

})
