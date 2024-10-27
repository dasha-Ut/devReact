import { Button } from '../components/Button/Button';
import { PropsTable } from '../components/PropsTable';
import { EmojiButton } from '../components/EmojiButton/EmojiButton';
import { ColoredBlock } from '../components/ColoredBlock/ColoredBlock';
import { ValueLabel } from '../components/ValueLabel/ValueLabel';
//import { useRerender } from '../Hooks/useRerender';
import { useState } from 'react';
import { logTagged } from '../utils/logTagged';

enum UserRole {
    ADMIN = 'admin',
    CUSTOMER = 'customer',
}

interface User {
    id: string;
    name: string;
    role: UserRole;
}

const DEFAULT_USER: User = {
    id: '1',
    name: 'John Doe',
    role: UserRole.ADMIN,
};

const EMOJIS: string[] = ['🗺', '🗿', '🏟', '🗼', '🏯', '🎡'];

export function UseStateAndNewRenders(): JSX.Element {
    const [emoji, setEmoji] = useState<string>(EMOJIS[0]);
    const [user, setUser] = useState<User>(DEFAULT_USER);

    //const rerender = useRerender();

    const mapToEmojiButton = (e: string): JSX.Element => {
        const onClick = () => {
            logTagged('setState', e);
            setEmoji(e);
        };
        return <EmojiButton key={e} emoji={e} onClick={onClick} />;
    };

    const setUserConstant = () => {
        setUser(DEFAULT_USER);
    };

    const setObjectLiteral = () => {
        setUser({
            id: '2',
            name: 'Jane Doe',
            role: UserRole.CUSTOMER,
        });
    };

    return (
        <div>
            <h3>useState and new renders</h3>
            <h5>Hooks basics, useState</h5>
            <ColoredBlock style={{ marginBottom: 24 }}>
                I'm a render indicator. If I will change my background color - new render was triggered.
            </ColoredBlock>

            <div>{EMOJIS.map(mapToEmojiButton)}</div>
            <ValueLabel value={emoji} />

            <div>
                <Button text="Set user constant" onClick={setUserConstant} />
                <Button text="Set object literal" onClick={setObjectLiteral} />
            </div>
            <PropsTable title="User" data={user} />
        </div>
    );
}