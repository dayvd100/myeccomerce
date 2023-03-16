import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Moletons from './pages/moletons';
import Contato from './pages/contato';
import Tenis from './pages/tenis';
import Calca from './pages/calca';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>

      {/* aqui é a rota principal */}
  <Route Route path='/' element={<App/>}>

      {/* e aqui os (outlets) rotas filhas*/}
      <Route path='/tenis' element={<Tenis/>}/>
      <Route path='/contato' element={<Contato/>}/>
      <Route path='/moletons' element={<Moletons/>}/>
      <Route path='/calca' element={<Calca/>}/>
      <Route path='/' element={<Tenis/>}/>
  </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
