import { ChapterWrapper } from '../components/ChapterWrapper/ChapterWrapper';
import { Toolbar } from '../components/Toolbar/Toolbar';

import { useHovered } from 'hooks/useHovered';

type EmojiHoverProps = {
    idle: string;
    hover: string;
};

function EmojiHover({ idle, hover }: EmojiHoverProps) {
    const [isHovered, refCallback] = useHovered();

    return (
        <div ref={refCallback} style={{ fontSize: 48, cursor: 'pointer' }}>
            {isHovered ? hover : idle}
        </div>
    );
}

export function UseHoveredExample() {
    return (
        <ChapterWrapper title="useHovered" subtitle="More custom hooks">
            <Toolbar>
                <EmojiHover idle="🐈" hover="🐈‍⬛" />
                <EmojiHover idle="🐘" hover="🦣" />
                <EmojiHover idle="🐠" hover="🐡" />
                <EmojiHover idle="🐴" hover="🦄" />
                <EmojiHover idle="🐵" hover="🙈" />
            </Toolbar>
        </ChapterWrapper>
    );
}