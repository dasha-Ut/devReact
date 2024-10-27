//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.tsx'
import './main.css';
import { Fragments } from './Intro/JSX/Fragments'
import { Arrays, CharacterList } from './Intro/JSX/Arrays'
import { DataTypes } from './Intro/JSX/DataTypes'
import { HelloWorld } from './Intro/HelloWorld';
import { UseStateBasics } from './Hooks/UseStateBasics';
import { DirectStateMutation } from './Hooks/DirectStateMutation';
import { UseCounterExample } from './Hooks/CustomHooks/UseCounterExample';
import { UseMergedStateExample } from './Hooks/UseDeepSetState';
import { LazyInitialization } from './Hooks/LazyInitialisation/LazyInitialization';
import { Calculator } from './Hooks/StoringFunctionCalculator';
import { UseStateAndNewRenders } from './Hooks/UseStateAndNewRenders';


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
  </div>

)
