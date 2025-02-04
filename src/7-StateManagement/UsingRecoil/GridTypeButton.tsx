import { Button } from '../../components/Button/Button';
import { UseState } from '../../types/UseState';
import { GridType } from './GridType';

type Props = {
    text: string;
    gridType: GridType;
    state: UseState<GridType>;
};

export function GridTypeButton({ text, gridType, state }: Props) {
    const [currentGridType, setGridType] = state;

    return (
        <Button
            text={text}
            onClick={() => setGridType(gridType)}
            disabled={gridType === currentGridType}
        />
    );
}