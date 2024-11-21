import { ITEMS } from '../ItemData';
import { EmojisGallery } from './EmojisGallery';

export function ListWithoutMemoization() {
    return (
        <div>
            <EmojisGallery items={ITEMS} />
        </div>
    );
}