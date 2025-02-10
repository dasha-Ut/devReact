import { Button } from '../components/Button/Button';
import { ChapterWrapper } from '../components/ChapterWrapper/ChapterWrapper';
import { RelatedDocs } from 'components/RelatedDocs/RelatedDocs';
import { useActionState } from 'react';
import classes from './UseActionStateExample.module.css';

type SubscribeResponse = {
    success: boolean;
    message: string;
};

export function UseActionStateExample() {
    const [state, formAction, isPending] = useActionState(subscribeToNewsletter, null);

    return (
        <ChapterWrapper title="useActionState" subtitle="New hooks in React 19">
            <div className={classes.content}>
                <form action={formAction}>
                    <div className={classes.formField}>
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className={classes.input}
                            disabled={isPending}
                            placeholder="Enter your email"
                        />
                        {!isPending && state?.success && (
                            <div className={classes.success}>{state.message}</div>
                        )}
                        {!isPending && !state?.success && state?.message && (
                            <div className={classes.error}>{state.message}</div>
                        )}
                    </div>
                    <Button
                        type="submit"
                        disabled={isPending}
                        text={isPending ? 'Subscribing...' : 'Subscribe'}
                    />
                </form>

                <RelatedDocs
                    docs={[
                        {
                            label: 'useActionState',
                            href: 'https://react.dev/reference/react/useActionState',
                        },
                    ]}
                />
            </div>
        </ChapterWrapper>
    );
}

async function subscribeToNewsletter(
    _previousState: SubscribeResponse | null,
    _formData: FormData,
): Promise<SubscribeResponse> {
    try {
        await new Promise((_resolve, reject) => setTimeout(() => reject(new Error()), 1500));
        return {
            success: true,
            message: 'Successfully subscribed to newsletter!',
        };
    }
    catch (error) {
        return {
            success: false,
            message: 'Failed subscribed to newsletter!',
        };
    }



}