import { Button } from '../components/Button/Button';
import { PropsTable } from '../components/PropsTable';
import { EmojiButton } from '../components/EmojiButton/EmojiButton';
import { ColoredBlock } from '../components/ColoredBlock/ColoredBlock';
import { ValueLabel } from '../components/ValueLabel/ValueLabel';
import { useRerender } from '../1-HooksBasics/useRerender';
import { useState } from 'react';
import { logTagged } from '../utils/logTagged';
import { ChapterWrapper } from 'components/ChapterWrapper/ChapterWrapper';
import { Toolbar } from 'components/Toolbar/Toolbar';

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

export function UseStateAndNewRenders() {
    const [emoji, setEmoji] = useState<string>(EMOJIS[0]);
    const [user, setUser] = useState<User>(DEFAULT_USER);

    const rerender = useRerender();

    const mapToEmojiButton = (e: string) => {
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
        <ChapterWrapper
            title="useState and new renders"
            subtitle="Hooks basics, useState"
            rerender={rerender}
        >
            <ColoredBlock style={{ marginBottom: 24 }}>
                I'm a render indicator. If I will change my background color - new render was
                triggered.
            </ColoredBlock>

            <Toolbar>{EMOJIS.map(mapToEmojiButton)}</Toolbar>
            <ValueLabel value={emoji} />

            <Toolbar>
                <Button text="Set user constant" onClick={setUserConstant} />
                <Button text="Set object literal" onClick={setObjectLiteral} />
            </Toolbar>
            <PropsTable title="User" data={user} />
        </ChapterWrapper>
    );
}