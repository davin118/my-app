import Computer from "./Computer";
function ListComputer(props){
    const listComputerRender= props.elements.map(element =>{
        return <Computer
            // marca= {Element.Marca}
            // modelo = {Element.Modelo}   
            // descripcion={Element.Descripcion}
            // imagen = {Element.Imagen}
            value = {element}
            key={element.Id}
            fnAddFavoritesComputer={props.fnAddFavoritesComputer}
        />
    });
    
    return(
        <div className="row ">
            {listComputerRender}

        </div>
    );
}
export default ListComputer;