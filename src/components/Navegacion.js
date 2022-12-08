import "../App.css";
import useContextComputer from "../hooks/useContextComputer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../App.css'

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
      <div className="container-fluid" >
        <Link className="navbar-brand text-light"  to={'/'}>Home</Link>
        <Link className="navbar-brand text-light"  to={'/list'} >List</Link>
        <Link className="navbar-brand text-light" to={'/favorite'}  >Favorite</Link>
        <Link className="navbar-brand text-light"  to={'/create'}>Create</Link>
        <form   className="d-flex" onSubmit={(e)=>handleSubmi(e)} >
          <input className="form-control me-2" type="search" placeholder="Buscar por Marca" aria-label="Search"
          onChange={(e)=>setMarca(e.target.value)}/>
          <input type="submit" className="btn btn-outline-success" value="Search"/>
        </form>
      </div>
    </nav>
    )
}

export default Navegacion;