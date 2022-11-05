import Favorito from "./Favorito";

function ListFavoritos(props){
    let listaFavoritosRender=  props.elements.map(Element=>{
        return(<Favorito key={Element.Id}
            value={Element}
           deleComputerFavorites={props.deleComputerFavorites}/>);
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