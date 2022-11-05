import { useState } from "react";
import '../App.css';
function Computer(props){
    const[verMas,setVerMas]= useState(false);
    var seccionVerMas= <button onClick={()=>setVerMas(true)} className="btn btn-success" >
                            <i class="fa-sharp fa-solid fa-chevron-down"></i>
                        </button>

    if(verMas){
        seccionVerMas=<div>
            <button 
                onClick={()=>setVerMas(false)}
                className="btn btn-success"
            >
                <i class="fa-solid fa-circle-xmark"></i>
            </button>
            <hr/>
            {props.value.Descripcion}
        </div>
    }

    return(
        <div className="col-md-4" >
           <div className="card "   >
                <img src={props.value.Imagen} className="card-img-top" alt="..."  />
                <div className="card-body" id="vermas">
                    <h5 className="card-title">{props.value.Marca}</h5>
                    <p className="card-text">{props.value.Modelo}</p>
                    {seccionVerMas}
                    <button className="btn btn-warning" onClick={()=>props.fnAddFavoritesComputer(props.value)} >
                    <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        </div> 

        
    );
}

export default Computer;