import React from 'react';
import './App.css';

import Navegacion from './components/Navegacion';
import ListComputer from "./components/ListComputer";
import dataComputer from './Data/Computer';
import { useState } from 'react';
import ListFavoritos from './components/ListFavoritos';
import Footer from './components/Footer';
import CreateComputer from './components/CreateComputer';

function App() {
  //agregar favoritos
  function addComputerFavorites(element){
    let tempListComputer=[...listComputersFavoritas];
     let numero= tempListComputer.indexOf(element);
     if(numero>=0){
      tempListComputer.splice(numero,1);
     }else{
      tempListComputer.push(element);
      setlistComputersFavoritas(tempListComputer);
    }
   }
   //Eliminar favorito
  function deleComputerFavorites(element){
    let tempListComputer = listComputersFavoritas.filter(value => value.Id != element.Id);
    setlistComputersFavoritas(tempListComputer);
   }

   //crear
   function newComputer(element){
    setListComputers([...listComputers,element]);
    // let tempListComputer=[...listComputers];
    // tempListComputer.push(element);
    //   setListComputers(tempListComputer);
   }
  const[listComputersFavoritas,setlistComputersFavoritas]=useState([]);
  const[listComputers,setListComputers]=useState(dataComputer);

  return (
    <div className='todo'>
      <Navegacion/>
      <div className="bg-success p-2 text-light bg-opacity-25" id='container'  >
        <div className='row' >
          <div className='col-md-9'>
            <ListComputer
              elements={listComputers}
              fnAddFavoritesComputer={addComputerFavorites}
             />
          </div>
          <div className='col-md-3'>
            <CreateComputer
            newComputer={newComputer} />
            <ListFavoritos
              elements={listComputersFavoritas}
              deleComputerFavorites={deleComputerFavorites}
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
