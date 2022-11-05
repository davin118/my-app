import { useState } from "react";

function CreateComputer(props){
  const [marca,setMarca]=useState("");
  const [modelo,setModelo]=useState("");
  const [descripcion,setDescripcion]= useState("");
  const [imagen,setImagen]=useState("");

  function handleSubmit(e){
    e.preventDefault();
    props.newComputer({
      'Marca': marca,
      'Modelo': modelo,
      'Descripcion': descripcion,
      'Imagen': imagen

    });
    
  }

    return(
        <form   onSubmit={(e)=>handleSubmit(e)} className="border border-2 border-secondary p-2 rounded" >
          <input placeholder="Imagen" 
                  className="form-control mb-2"  
                  type="text" value={imagen}
                  onChange={(e)=>setImagen(e.target.value)}/>
 
            <input placeholder="Marca" 
                  className="form-control mb-2"  
                  type="text" value={marca}
                  onChange={(e)=>setMarca(e.target.value)}/>

            <input placeholder='Modelo'
                  className="form-control mb-2" 
                  type="text"  value={modelo}
                  onChange={(e)=>setModelo(e.target.value)}/>

            <input placeholder="Descripcion" 
                  className="form-control mb-2"  
                  type="text" value={descripcion}
                  onChange={(e)=>setDescripcion(e.target.value)}/>
            <input type="submit" value="create" className="btn btn-primary"/>
        </form>

    );
}

export default CreateComputer;