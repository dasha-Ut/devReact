import { Chapter, Section } from 'components/MasterDetail';
import { RouterPath } from '../config/RouterPath';
import { ListWithMemoization } from './ListWithMemoization/ListWithMemoization';
import { ListWithoutMemoization } from './ListWithoutMemoization/ListWithoutMemoization';
import { UseUpdateEffect } from './UseUpdateEffect/UseUpdateEffectExample';
import { WhenReactRenderComponents } from './UseMemo/WhenReactRenderComponents';
import { UseMemoExample } from './UseMemo/UseMemoExample';
import { MemoizedRefCallback } from './MemoizedRefCallback/MemoizedRefCallback';

export function MemoizationSection() {
    return (
        <Section title="Memoization">
            <Section title="useCallback">
                <Chapter
                    emoji="🌉"
                    title="List without memoization"
                    path={RouterPath.LIST_WITHOUT_MEMOIZATION}
                    element={<ListWithoutMemoization />}
                />
                <Chapter
                    emoji="🌁"
                    title="List with memoization"
                    path={RouterPath.LIST_WITH_MEMOIZATION}
                    element={<ListWithMemoization />}
                />
                <Chapter
                    emoji="📬"
                    title="useUpdateEffect"
                    path={RouterPath.USE_UPDATE_EFFECT}
                    element={<UseUpdateEffect />}
                />
            </Section>
            <Section title="useMemo">
                <Chapter
                    emoji="📽"
                    title="When React render components?"
                    path={RouterPath.WHEN_REACT_RENDERS}
                    element={<WhenReactRenderComponents />}
                />
                <Chapter
                    emoji="💾"
                    title="useMemo"
                    path={RouterPath.USE_MEMO}
                    element={<UseMemoExample />}
                />
            </Section>
            <Chapter
                emoji="📏"
                title="Memoized ref callback"
                path={RouterPath.MEMOIZED_REF_CALLBACK}
                element={<MemoizedRefCallback />}
            />
        </Section>
    );
}