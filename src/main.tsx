//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.tsx'
import './main.css';
import { Fragments } from './Intro/JSX/Fragments'
import { Arrays } from './Intro/JSX/Arrays'
import { DataTypes } from './Intro/JSX/DataTypes'
import { HelloWorld } from './Intro/HelloWorld';

createRoot(document.getElementById('root')!).render(
  <div>
    <Fragments />
    <HelloWorld />
    <Arrays />
    <DataTypes />
  </div>

)
