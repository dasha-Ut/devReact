//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.tsx'
import './main.css';
import { Fragments } from './Intro/JSX/Fragments'
//import { SameThingWithJsx } from './Intro/JSX/Basics'
import { HelloWorld } from './Intro/HelloWorld';

createRoot(document.getElementById('root')!).render(
  <div>
    <Fragments />
    <HelloWorld />
  </div>

)
