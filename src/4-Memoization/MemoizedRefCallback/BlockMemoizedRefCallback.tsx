import { ColoredBlock } from '../../components/ColoredBlock/ColoredBlock';
import { useCallback, useState } from 'react';
import { logTagged } from '../../utils/logTagged';

import { BlockProps } from './BlockProps';

export function BlockMemoizedRefCallback({ visible }: BlockProps): JSX.Element {
    const [rect, setRect] = useState<DOMRect | null>(null);

    const sizeText = rect ? `${rect.width.toFixed(0)} x ${rect.height.toFixed(0)}` : null;
    console.log('memoized render');
    const onRefAquired = useCallback((node: HTMLDivElement | null) => {
        logTagged('memoized callback', String(node));
        if (node) {
            logTagged('SET memoized callback', String(node));
            setRect(node.getBoundingClientRect());
        }
    }, []);

    if (!visible) {
        return <></>;
    }

    return (
        <div ref={onRefAquired} style={{ flex: 1, textAlign: 'center' }}>
            <ColoredBlock>{sizeText}</ColoredBlock>
        </div>
    );
}