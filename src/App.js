import React from 'react';
import './App.css';

import Navegacion from './components/Navegacion';
import Footer from './components/Footer';
import { ComputerContextProvider } from './Data/ComputerContext';
import { Outlet } from 'react-router';



function App() {


  return (
    <div className='todo'>
      <ComputerContextProvider>
      <Navegacion/>
      <div className="bg-success p-2 text-light bg-opacity-25" id='container'  >
        <div className='row' >
          <Outlet/>
        </div>
      </div>
      <Footer/>
      </ComputerContextProvider>
    </div>
  );
}

export default App;
