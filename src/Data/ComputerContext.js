import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React,{ useState } from "react";
import dataComputer from "./Computer";
const ComputerContext = React.createContext();


function ComputerContextProvider({children}){
    const[listComputersFavoritas,setlistComputersFavoritas]=useState([]);
    const[listComputers,setListComputers]=useState(dataComputer);
    //const[searchListComputer,SetSearchComputer]= useState([]);
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

      //funcion buscar
      function searchComputer(element){
        if(element.Marca.length <= 0) {
          return setListComputers(dataComputer);
        }
        let tempListComputer = listComputers.filter((val) => {
          if(val.Marca.toLowerCase().includes(element.Marca.toLowerCase()))
            return val;
        });
        console.log(tempListComputer);
        return setListComputers(tempListComputer);
      }
       return (
        <ComputerContext.Provider value={
            {
              listComputers,
              listComputersFavoritas,
              addComputerFavorites,
              deleComputerFavorites,
              newComputer,
              searchComputer
            }
          } >
            {children}
            </ComputerContext.Provider>
       )

}

export {ComputerContext,ComputerContextProvider};
