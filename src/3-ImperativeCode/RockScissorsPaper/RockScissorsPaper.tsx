import { Toolbar } from '../../components/Toolbar/Toolbar';

import { useState } from 'react';

import { HandShape } from './HandShape';
import { HandShapeEmoji } from './HandShapeEmoji';
import { RockScissorsPaperInput } from './RockScissorsPaperInput';

export function RockScissorsPaper(): JSX.Element {
    const [currentValue, setCurrentValue] = useState<HandShape>('✊');

    return (
        <div> Rock Scissors Paper
            <Toolbar>
                <RockScissorsPaperInput currentValue={currentValue} onChange={setCurrentValue} />
            </Toolbar>

            <Toolbar>
                Current value: <HandShapeEmoji value={currentValue} />
            </Toolbar>
        </div>
    );
}