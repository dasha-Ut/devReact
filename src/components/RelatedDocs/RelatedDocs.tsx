import { TextBlock } from '../TextBlock/TextBlock';

export type RelatedDocsProps = {
    docs: { label: string; href: string }[];
};

export function RelatedDocs({ docs }: RelatedDocsProps) {
    return (
        <TextBlock style={{ marginTop: 16 }}>
            📚 Related docs:
            <ul>
                {docs.map((doc) => (
                    <li key={doc.href}>
                        <a target="_blank" rel="noreferrer" href={doc.href}>
                            {doc.label}
                        </a>
                    </li>
                ))}
            </ul>
        </TextBlock>
    );
}