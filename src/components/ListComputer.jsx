import Computer from "./Computer";
import useContextComputer from "../hooks/useContextComputer";
function ListComputer(){

    const computerContext=useContextComputer();
    

    let listComputerRender= computerContext.listComputers.map(element =>{
        return <Computer
            // marca= {Element.Marca}
            // modelo = {Element.Modelo}   
            // descripcion={Element.Descripcion}
            // imagen = {Element.Imagen}
            value = {element}
            key={element.Id}
            fnAddFavoritesComputer={computerContext.addComputerFavorites}
            searchComputer={computerContext.searchComputer}
        />
    });
    
    return(
        <div className=" row row-cols-3 ">
            {listComputerRender}

        </div>
    );
}
export default ListComputer;