import type { Meta, StoryObj } from '@storybook/react';
import { LoadingSpinner, LoadingSpinnerType } from './LoadingSpinner';

export default {
    component: LoadingSpinner,
} as Meta<typeof LoadingSpinner>;

type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = {
    render: () => (
        <div
            style={{
                border: '1px solid #0004',
                position: 'relative',
                height: 300,
            }}
        >
            <LoadingSpinner />
        </div>
    ),
}

export const WithMessage: StoryObj<LoadingSpinnerType> = {
    args: {
        loadingMessage: "Loading data.."
    },
    render: () => (
        <div
            style={{
                border: '1px solid #0004',
                position: 'relative',
                height: 300,
            }}
        >
            <LoadingSpinner loadingMessage={"Loading data.."} />
        </div>
    ),
}