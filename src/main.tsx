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
  </div>

)
