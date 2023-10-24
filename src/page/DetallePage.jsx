import React from "react";
import { useParams } from "react-router";
import useContextComputer from "../hooks/useContextComputer";

export default function DetallePage(){
 const {Id}=useParams();
 let computerContext=useContextComputer();
 return(
    <>
        {computerContext.listComputers.map((e)=>{
            if(e.Id===Number(Id)){
                return(
                    <div key={e.Id} className="ui vertically divided grid" style={{ height:"100%" }}>
                        <div className="two column row">
                            <div className="column">
                                <img style={{ height: "400px"}} src={e.Imagen}  />
                            </div>
                            <div className="column">
                                <h1>{e.Marca}</h1>
                                <h3>{e.Descripcion}</h3>
                            </div>
                        </div>
                    </div>
                )
                
            }
        })

        }
    </>
 )
}
