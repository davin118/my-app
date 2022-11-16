import React from 'react';
import './App.css';

import Navegacion from './components/Navegacion';
import ListComputer from "./components/ListComputer";
import ListFavoritos from './components/ListFavoritos';
import Footer from './components/Footer';
import CreateComputer from './components/CreateComputer';
import { ComputerContextProvider } from './Data/ComputerContext';



function App() {


  return (
    <div className='todo'>
      <ComputerContextProvider>
      <Navegacion/>
      <div className="bg-success p-2 text-light bg-opacity-25" id='container'  >
        <div className='row' >
          <div className='col-md-9'>
            <ListComputer
              /*elements={listComputers}*/
              // fnAddFavoritesComputer={addComputerFavorites}
             />
          </div>
          <div className='col-md-3'>
            <CreateComputer/>
            <ListFavoritos
              //elements={listComputersFavoritas}
              //deleComputerFavorites={deleComputerFavorites}
            />
          </div>
        </div>
      </div>
      <Footer/>
      </ComputerContextProvider>
    </div>
  );
}

export default App;
