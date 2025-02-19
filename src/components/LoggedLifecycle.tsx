import { useLoggedLifecycle } from '../hooks/useLoggedLifecycle';
import { ReactNode } from 'react';

interface Props {
    tag: string;
    children: ReactNode;
}

export function LoggedLifecycle({ tag, children }: Props): JSX.Element {
    useLoggedLifecycle(tag);

    return <>{children}</>;
}