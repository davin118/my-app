import "../App.css";
import useContextComputer from "../hooks/useContextComputer";
import { useState, useEffect } from "react";

function Navegacion(){
  const computerContext=useContextComputer();
  const [marca,setMarca]=useState("");

  useEffect(() => {
    computerContext.searchComputer({
      'Marca':marca
     });
  }, [marca]);

   function handleSubmi(e){
     e.preventDefault();
     computerContext.searchComputer({
      'Marca':marca
     });
    }
    return(
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="/" >Inicio</a>
        <form   className="d-flex" onSubmit={(e)=>handleSubmi(e)} >
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
          onChange={(e)=>setMarca(e.target.value)}/>
          <input type="submit" className="btn btn-outline-success" value="Search"/>
        </form>
      </div>
    </nav>
    )
}

export default Navegacion;