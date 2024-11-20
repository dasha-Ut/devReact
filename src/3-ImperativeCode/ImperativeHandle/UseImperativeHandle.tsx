import { useRef, useState } from 'react';
import { Toolbar } from '../../components/Toolbar/Toolbar';
import { Button } from "../../components/Button/Button";
import { PinInput, PinInputHandle } from './PinInput';

const initialDigits = ['', '', '', ''];

export function UseImperativeHandle(): JSX.Element {
    const [digits, setDigits] = useState<string[]>(initialDigits);
    const ref = useRef<PinInputHandle | null>(null);

    const focus = () => {
        ref.current?.focus();
    };

    const clear = () => {
        setDigits(initialDigits);
    };

    return (
        <div>
            <Toolbar>
                <PinInput ref={ref} digits={digits} onChange={setDigits} />
            </Toolbar>

            <Toolbar>
                <Button text="Focus" onClick={focus} />
                <Button text="Clear" onClick={clear} />
            </Toolbar>
        </div>
    );
}