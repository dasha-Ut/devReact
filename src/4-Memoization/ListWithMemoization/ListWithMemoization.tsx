import { ITEMS } from '../ItemData';
import { EmojisGallery } from './EmojisGallery';
import { ChapterWrapper } from 'components/ChapterWrapper/ChapterWrapper';
import { useRerender } from 'hooks/useRerender';

export function ListWithMemoization() {
    return (
        <ChapterWrapper
            title="useCallback"
            subtitle="List with memoization"
            rerender={useRerender()}
        >
            <EmojisGallery items={ITEMS} />
        </ChapterWrapper>
    );
}