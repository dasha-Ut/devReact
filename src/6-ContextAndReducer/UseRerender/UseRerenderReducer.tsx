//import { ChapterWrapper, ColoredBlock } from 'components';
import { ColoredBlock } from '../../components/ColoredBlock/ColoredBlock';
import { useRerender } from './useRerender';

export function UseRerenderReducer(): JSX.Element {
    const rerender = useRerender();

    return (
        // <ChapterWrapper title="useReducer" subtitle="useRerender hook version 2" rerender={rerender}>
        <ColoredBlock onClick={rerender}>Click me to trigger re-render</ColoredBlock>
        // </ChapterWrapper>
    );
}