import { MouseEventHandler } from 'react';

import classes from './EmojiButton.module.css';

export interface EmojiButtonProps {
    emoji: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    tooltip?: string;
    disabled?: boolean;
}

export function EmojiButton({ emoji, onClick, disabled, tooltip }: EmojiButtonProps): JSX.Element {
    return (
        <>
            <div data-tip={tooltip}>
                <button className={classes.button} onClick={onClick} disabled={disabled}>
                    {emoji}
                </button>
            </div>

        </>
    );
} 