// import { MouseEventHandler } from 'react';
import { ButtonHTMLAttributes } from 'react';
import classes from './Button.module.css';
import { cn } from 'utils/cn';

// export interface ButtonProps {
//     text: string;
//     onClick: MouseEventHandler<HTMLButtonElement>;
//     disabled?: boolean;
// }

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    text: string;
};

export function Button({ text, className, ...restProps }: ButtonProps) {
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
        <button className={cn(classes.button, className)} {...restProps}>
            {text}
        </button>
        // <button className={classes.button} onClick={onClick} disabled={disabled}>
        //     {/* <i className={iconClass + (disabled ? ' grey-text' : ' blue-text') + (text ? 'left' : '')}></i> */}
        //     {text}
        // </button>
    );
}

