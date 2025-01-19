import { ITEMS } from '../ItemData';
import { EmojisGallery } from './EmojisGallery';
import { ChapterWrapper } from 'components/ChapterWrapper/ChapterWrapper';
import { useRerender } from 'hooks/useRerender';

export function ListWithoutMemoization() {
    return (
        <ChapterWrapper
            title="useCallback"
            subtitle="List without memoization"
            rerender={useRerender()}
        >
            <EmojisGallery items={ITEMS} />
        </ChapterWrapper>
    );
}