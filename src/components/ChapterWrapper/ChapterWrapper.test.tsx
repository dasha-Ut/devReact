import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { ChapterWrapper, ChapterWrapperProps } from './ChapterWrapper';
import { BrowserRouter } from 'react-router-dom';

function TestWrapper(props: ChapterWrapperProps) {
    return (
        <BrowserRouter>
            <ChapterWrapper {...props} />
        </BrowserRouter>
    );
}

describe('Chapter Wrapper', () => {
    test('render Chapter Wrapper correctly', () => {
        const title = "Title text";
        const subtitle = "Subtitle text";

        render(<TestWrapper title={title} subtitle={subtitle}>
            Chapter Wrapper
        </TestWrapper>)

        expect(screen.getByText(title)).toBeVisible;
        expect(screen.getByText(subtitle)).toBeVisible;

        // we need to check that this element was not rendered
        // so we need to use queryByText instead of getByText
        expect(screen.queryByText('🔄')).toBeNull();
    })

    test('should show rerender button', async () => {
        const title = 'Title text';
        const rerender = vi.fn();
        render(
            <TestWrapper title={title} rerender={rerender}>
                <div>Content</div>
            </TestWrapper>,
        );

        expect(screen.getByText(title)).toBeVisible();

        const rerenderButton = screen.getByText('🔄');
        expect(rerenderButton).toBeVisible();

        await userEvent.click(rerenderButton);

        expect(rerender).toHaveBeenCalledTimes(1);
    });
})