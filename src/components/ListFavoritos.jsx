import Favorito from "./Favorito";
import useContextComputer from "../hooks/useContextComputer";
function ListFavoritos(){
    const computerContext=useContextComputer();
    let listaFavoritosRender=computerContext.listComputersFavoritas.map(Element=>{
        return(<Favorito key={Element.Id}
            value={Element}
           deleComputerFavorites={computerContext.deleComputerFavorites}/>);
    });

    return(
        <div>
            <i className="fa fa-chevron-circle-down" aria-hidden="true">Lista favoritos</i>
            <hr/>
            <h4>{listaFavoritosRender}
            </h4>
        </div>
    )
} 
export default ListFavoritos;