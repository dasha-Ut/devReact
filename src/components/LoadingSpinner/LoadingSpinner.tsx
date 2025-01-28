import classes from './LoadingSpinner.module.css';

export type LoadingSpinnerType = {
    loadingMessage?: string
}

export function LoadingSpinner({ loadingMessage = '' }: LoadingSpinnerType) {
    return <>
        <div className={classes.loadingContainer}>
            <div className={classes.loadingSpinner}>◌</div>
        </div>
        {loadingMessage &&
            <div className={classes.loadingSpinner__message_wrapper}>
                <span className={classes.loadingSpinner__message}>
                    {loadingMessage}
                </span>
            </div>
        }
    </>
}