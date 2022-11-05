import "../App.css";

function Navegacion(){
    return(
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light">Inicio</a>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
    );
}

export default Navegacion;