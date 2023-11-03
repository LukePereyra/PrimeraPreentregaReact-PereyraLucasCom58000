import CartWidget from "../CartWidget/CartWidget";
import OsitoOG from "../CartWidget/assets/OsitoOG.png";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={OsitoOG} className="image is-64x64" alt="imagenOso" />
          </Link>

          <div
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <NavLink to="/category/hombre" className="navbar-item">
              Compra
            </NavLink>

            <Link to="/category/mujer" className="navbar-item">
              Recetas
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">Conocenos</div>

              <div className="navbar-dropdown">
                <Link to="/quienes-somos" className="navbar-item">
                  Quienes somos
                </Link>
                <Link to="/nuestra-historia" className="navbar-item">
                  Nuestra historia
                </Link>
                <Link to="/contacto" className="navbar-item">
                  Contacto
                </Link>
                <hr className="navbar-divider" />
                <Link to="/sugerencias" className="navbar-item">
                  Sugerencias
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <CartWidget />
                <Link to="/signup" className="button is-primary">
                  <strong>Sign up</strong>
                </Link>
                <Link to="/login" className="button is-light">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default NavBar;

