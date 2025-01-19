import { MouseEventHandler } from 'react';

import classes from './Button.module.css';

export interface ButtonProps {
    text: string;
    customStyle?: string;
    iconClass?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

// export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
//     text: string;
// };


export function Button(props: ButtonProps) {
    const { text, onClick, customStyle = '', iconClass = '', disabled = false } = props;

    return (

        // <button
        //     type="button"
        //     disabled={disabled}
        //     className={classes.button}
        //     //   style={customStyle}
        //     onClick={onClick}
        // >
        //     <i className= {iconClass + (disabled ? ' grey-text' : ' blue-text') + (text ? 'left' : '')}></i>
        //     {text}
        // </button>

        <button className={classes.button} onClick={onClick} disabled={disabled}>
            <i className={iconClass + (disabled ? ' grey-text' : ' blue-text') + (text ? 'left' : '')}></i>
            {text}
        </button>
    );
}

