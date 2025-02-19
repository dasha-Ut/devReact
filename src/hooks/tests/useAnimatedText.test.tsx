import { useAnimatedText } from "hooks/useAnimatedText";
import { render, screen } from '@testing-library/react';

function TestComponent({ text }: { text: string }) {
    const animatedText = useAnimatedText(text, 10);
    return <div>{animatedText}</div>
}

describe('useAnimatedText hook', () => {
    test('should change text over time', async () => {
        render(<TestComponent text='animated' />)

        expect(await screen.findByText('ani')).toBeVisible();
        expect(await screen.findByText('anima')).toBeVisible();
        expect(await screen.findByText('animat')).toBeVisible();

    });
})