import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { EmojiButton, EmojiButtonProps } from './EmojiButton';

export default {
    component: EmojiButton,
} as Meta<typeof EmojiButton>;

export const Default: StoryObj<EmojiButtonProps> = {
    args: {
        emoji: '🗿',
        onClick: fn(),
        disabled: false
    },
    render: (args: EmojiButtonProps) => <EmojiButton {...args} />
}

export const WithTooltip: StoryObj<EmojiButtonProps> = {
    args: {
        emoji: '🗿',
        onClick: fn(),
        disabled: false,
        tooltip: 'What?'
    },
    render: (args: EmojiButtonProps) => <EmojiButton {...args} />
}

export const Disabled: StoryObj<EmojiButtonProps> = {
    args: {
        emoji: '🗿',
        onClick: fn(),
        disabled: true,

    },
    render: (args: EmojiButtonProps) => <EmojiButton {...args} />
}