import { EmojiSection } from '../../2-SideEffects/UseEffectAndInterval/EmojiSection';
import { ChapterWrapper } from '../../components/ChapterWrapper/ChapterWrapper';

const MOON_EMOJIS = ['🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔'];
const EARTH_EMOJIS = ['🌎', '🌍', '🌏'];
const CLOCK_EMOJIS = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛'];

export function UseEffectAndInterval() {
    return (
        <ChapterWrapper title="useEffect + setInterval" subtitle="Side effects, useEffect">
            <EmojiSection emojis={MOON_EMOJIS} />
            <EmojiSection emojis={EARTH_EMOJIS} />
            <EmojiSection emojis={CLOCK_EMOJIS} />
        </ChapterWrapper>
    )
}