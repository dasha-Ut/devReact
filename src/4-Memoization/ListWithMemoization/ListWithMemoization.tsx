import { ITEMS } from '../ItemData';
import { EmojisGallery } from './EmojisGallery';

export function ListWithMemoization(): JSX.Element {
    return (
        <div>
            <EmojisGallery items={ITEMS} />
        </div>
    );
}