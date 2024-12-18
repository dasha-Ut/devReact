const TRANSPORT_EMOJIS = ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎', '🚓', '🚑', '🚒', '🚐', '🛻', '🚚'];
const BALLS_EMOJIS = ['⚽️', '🏀', '🏈', '⚾️', '🎾', '🏐', '🏉'];


interface EmojisListProps {
    emojis: string[];
    ordered?: boolean; // boolean | undefined
}

export function EmojisList(props: EmojisListProps): JSX.Element {
    const { emojis, ordered = false } = props;
    const listItems = emojis.map((emoji, index) => <li key={index}>{emoji}</li>);
    const ListComponent = ordered ? 'ol' : 'ul';
    return <ListComponent>{listItems}</ListComponent>;
}


export function EmojisTable({ emojis }: { emojis: string[] }): JSX.Element {
    const rows = new Array<JSX.Element>();
    // const rows: JSX.Element[] = [];

    for (let i = 0; i < emojis.length; i++) {
        const emoji = emojis[i];
        rows.push(
            <tr key={i}>
                <td>{i + 1}</td>
                <td>{emoji}</td>
                <td>
                    {emoji
                        .split('')
                        .map((ch) => ch.charCodeAt(0))
                        .join(' + ')}
                </td>
            </tr>
        );
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Emoji</th>
                    <th>Char codes</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

interface propsTitleProps {
    title: string;
    subtitle: string;
}

export function TitleWithSubTitle(props: propsTitleProps): JSX.Element {
    return (
        <>
            <h1>
                {props.title}
            </h1>
            <h3>
                {props.subtitle}
            </h3>
        </>
    )
}


export function Arrays(): JSX.Element {
    return (
        <>
            <TitleWithSubTitle
                title={'Rendering arrays'}
                subtitle={'Introduction to JSX'}
            />

            <p>Balls emojis: {BALLS_EMOJIS}</p>
            <p>Transport emojis: {TRANSPORT_EMOJIS.join(' ')}</p>

            <div style={{ display: 'flex', gap: 20 }}>
                <EmojisList emojis={BALLS_EMOJIS} />
                <EmojisList emojis={TRANSPORT_EMOJIS} ordered />

                <EmojisTable emojis={BALLS_EMOJIS} />
                <EmojisTable emojis={TRANSPORT_EMOJIS} />
            </div>
        </>



    );

}

{/* <ChapterWrapper title="Rendering arrays" subtitle="Introduction to JSX">
<p>Balls emojis: {BALLS_EMOJIS}</p>
<p>Transport emojis: {TRANSPORT_EMOJIS.join(' ')}</p>

<div style={{ display: 'flex', gap: 20 }}>
  <EmojisList emojis={BALLS_EMOJIS} />
  <EmojisList emojis={TRANSPORT_EMOJIS} ordered />
  <EmojisTable emojis={BALLS_EMOJIS} />
  <EmojisTable emojis={TRANSPORT_EMOJIS} />
</div>
</ChapterWrapper> */}
//);

export const CHARACTERS = [
    { name: 'Harry Potter', isMain: true },
    { name: 'Hermione Granger', isMain: true },
    { name: 'Ron Weasley', isMain: true },
    { name: 'Albus Dumbledore', isMain: false },
    { name: 'Severus Snape', isMain: false },
    { name: 'Sirius Black', isMain: false },
    { name: 'Rubeus Hagrid', isMain: false },
]

function CharacterItem({ name, isMain }) {
    return (<>
        {isMain === true ? < li key={name} > {name} (main)</li > : <li>{name}</li>}
    </>)
}

export function CharacterList() {
    return (
        <ul style={{ padding: '20px' }}>
            {CHARACTERS.map(character => <CharacterItem key={character.name} {...character} />)}
        </ul>
    )
}

