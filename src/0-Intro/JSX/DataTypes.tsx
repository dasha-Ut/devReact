import { ChapterWrapper } from '../../components/ChapterWrapper/ChapterWrapper';
import { renderValues } from './RenderValues';

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

export function DataTypes(): JSX.Element {
    return (
        <ChapterWrapper title="Data types" subtitle="Introduction to JSX">
            <h3 style={{ padding: '20px' }}>Let's check how React renders different data types</h3>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Value</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {renderValues.map(({ type, valueString, value }, index) => (
                        <tr key={index}>
                            <td>
                                <b>{type}</b>
                            </td>
                            <td>
                                <code>{valueString}</code>
                            </td>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </ChapterWrapper>
    );
}