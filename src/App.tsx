import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './screens/Home';
import NovaTurma from './screens/NovaTurma';
import Aluno from './screens/Aluno';

import './App.css';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turma/nova" element={<NovaTurma />} />
        <Route path="/aluno/novo" element={<Aluno />} />
        {/* <Route path="/turmas" element={<Turmas />} />
        <Route path="/turma/:id" element={<Turma />} />
        <Route path="/turma/:id/chamada" element={<Chamada />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
