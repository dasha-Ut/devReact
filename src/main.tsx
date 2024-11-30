//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.tsx'
import './main.css';
import { Fragments } from './0-Intro/JSX/Fragments'
import { Arrays, CharacterList } from './0-Intro/JSX/Arrays'
import { DataTypes } from './0-Intro/JSX/DataTypes'
import { HelloWorld } from './0-Intro/HelloWorld';
import { UseStateBasics } from './1-HooksBasics/UseStateBasics';
import { DirectStateMutation } from './1-HooksBasics/DirectStateMutation';
import { UseCounterExample } from './1-HooksBasics/CustomHooks/UseCounterExample';
import { UseMergedStateExample } from './1-HooksBasics/UseDeepSetState';
import { LazyInitialization } from './1-HooksBasics/LazyInitialisation/LazyInitialization';
import { Calculator } from './1-HooksBasics/StoringFunctionCalculator';
import { UseStateAndNewRenders } from './1-HooksBasics/UseStateAndNewRenders';
import { DirectDomChanges } from './1-HooksBasics/CustomHooks/DirectDomChanges';
import { EffectDependencies } from './2-SideEffects/UseEffectBasics/EffectDependencies';
import { LocalStorageSync } from './2-SideEffects/UseEffectBasics/LocalStorageSync';
import { UseGlobalEvents } from './2-SideEffects/UseGlobalEvents/UseGlobalEvents';
import { UseEffectAndInterval } from './2-SideEffects/UseEffectAndInterval/UseEffectAndInterval';
import { FetchDataInUseEffect } from './2-SideEffects/FetchDataInUseEffect';
import { BewareOfInfiniteLoops } from './2-SideEffects/InfiniteLoops/BewareOfInfiniteLoops';
import { YouDontNeedUseEffect } from './2-SideEffects/YouDontNeedUseEffect/YouDontNeedUseEffect';
import { UseLayoutEffectExample } from './2-SideEffects/UseLayoutEffect/UseLayoutEffectExample';
import { ControlledInput } from './3-ImperativeCode/ControlledVsUncontrolled/ControlledInput';
import { UncontrolledInput } from './3-ImperativeCode/ControlledVsUncontrolled/UncontrolledInput';
import { RockScissorsPaper } from './3-ImperativeCode/RockScissorsPaper/RockScissorsPaper';
import { StoringStateInUseRef } from './3-ImperativeCode/StoringStateInUseRef/StoringStateInUseRef';
import { UseImperativeHandle } from './3-ImperativeCode/ImperativeHandle/UseImperativeHandle';
import { ListWithMemoization } from './4-Memoization/ListWithMemoization/ListWithMemoization';
import { ListWithoutMemoization } from './4-Memoization/ListWithoutMemoization/ListWithoutMemoization';
import { UseUpdateEffect } from './4-Memoization/UseUpdateEffect/UseUpdateEffectExample';
import { UseMemoExample } from './4-Memoization/UseMemo/UseMemoExample';
import { WhenReactRenderComponents } from './4-Memoization/UseMemo/WhenReactRenderComponents';
import { MemoizedRefCallback } from './4-Memoization/MemoizedRefCallback/MemoizedRefCallback';

createRoot(document.getElementById('root')!).render(
  <div>
    <Fragments />
    <HelloWorld />
    <Arrays />
    <DataTypes />
    <CharacterList />
    <UseStateBasics />
    <DirectStateMutation />
    <UseCounterExample />
    <UseMergedStateExample />
    <LazyInitialization />
    <Calculator />
    <UseStateAndNewRenders />
    <DirectDomChanges />
    <EffectDependencies />
    <LocalStorageSync />
    <UseGlobalEvents />
    <UseEffectAndInterval />
    <FetchDataInUseEffect />
    <BewareOfInfiniteLoops />
    <YouDontNeedUseEffect />
    <UseLayoutEffectExample />
    <ControlledInput />
    <UncontrolledInput />
    <RockScissorsPaper />
    <StoringStateInUseRef />
    <UseImperativeHandle />
    <ListWithMemoization />
    <ListWithoutMemoization />
    <UseUpdateEffect />
    <UseMemoExample />
    <WhenReactRenderComponents />
    <MemoizedRefCallback />
  </div>

)
