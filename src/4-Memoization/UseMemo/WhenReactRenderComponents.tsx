import { ColoredBlock } from '../../components/ColoredBlock/ColoredBlock';
import { useRerender } from '../../hooks/useRerender';
import { MouseEventHandler } from 'react';

import { Leaf } from './Leaf';
import { nodeStyle } from './nodeStyle';

interface NodeProps {
    level: number;
    maxLevel: number;
    path: string[];
}

function Node({ level, maxLevel, path }: NodeProps): JSX.Element {
    const rerender = useRerender();

    const handleClick: MouseEventHandler = (event) => {
        event.stopPropagation();
        rerender();
    };

    if (level === maxLevel) {
        return <Leaf path={path} onClick={handleClick} />;
    }

    return (
        <ColoredBlock style={nodeStyle} onClick={handleClick}>
            <Node level={level + 1} maxLevel={maxLevel} path={[...path, 'left']} />
            <Node level={level + 1} maxLevel={maxLevel} path={[...path, 'right']} />
        </ColoredBlock>
    );
}

export function WhenReactRenderComponents(): JSX.Element {
    return (
        <div>
            When React render components
            <Node level={0} maxLevel={2} path={['root']} />
        </div>
    );
}