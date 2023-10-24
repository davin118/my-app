import '../App.css'


function Favorito(props){

    let btnEliminar=<button onClick={()=>props.deleComputerFavorites(props.value)}  type="button" className="btn btn-danger " >
                        <i class="fa-solid fa-trash"></i>
                    </button>
    return(
        <div  id="contenedor" className="alert alert-light " role="alert">
            <img width="50px"src={props.value.Imagen} />
            <small>{props.value.Marca}</small>
            {btnEliminar}
        </div>
    )
}

export default Favorito;