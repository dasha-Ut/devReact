import classNames from 'classnames';
import { useLoggedLifecycle } from '../../hooks/useLoggedLifecycle';

import { ItemData } from '../ItemData';
import classes from './Item.module.css';

interface Props {
    item: ItemData;
    selected: boolean;
    onClick: (item: ItemData) => void;
}

export function Item({ item, selected, onClick }: Props): JSX.Element {
    const { emoji } = item;
    const className = classNames(classes.item, selected && classes.selected);

    useLoggedLifecycle(emoji);

    return (
        <div className={className} onClick={() => onClick(item)}>
            {emoji}
        </div>
    );
}