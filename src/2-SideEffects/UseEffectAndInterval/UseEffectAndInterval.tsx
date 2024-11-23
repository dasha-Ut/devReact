import { EmojiSection } from '../../2-SideEffects/UseEffectAndInterval/EmojiSection';

const MOON_EMOJIS = ['🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔'];
const EARTH_EMOJIS = ['🌎', '🌍', '🌏'];
const CLOCK_EMOJIS = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛'];

export function UseEffectAndInterval(): JSX.Element {
    return (
        <div> Use Effect and interval
            <EmojiSection emojis={MOON_EMOJIS} />
            <EmojiSection emojis={EARTH_EMOJIS} />
            <EmojiSection emojis={CLOCK_EMOJIS} />
        </div>)
}