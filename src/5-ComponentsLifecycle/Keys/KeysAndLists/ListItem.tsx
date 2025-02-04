import { ColoredBlock } from '../../../components/ColoredBlock/ColoredBlock';
import { RendersCounter } from '../../../components/RendersCounter/RendersCounter';
import { memo } from 'react';

import { Item } from './Item';

interface ListItemProps {
    item: Item;
    onClick: (item: Item) => void;
}

export const ListItem = memo(
    ({ item, onClick }: ListItemProps): JSX.Element => (
        <RendersCounter>
            <ColoredBlock onClick={() => onClick(item)}>{item.value}</ColoredBlock>
        </RendersCounter>
    )
);