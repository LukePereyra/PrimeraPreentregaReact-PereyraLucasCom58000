import CartWidget from "../CartWidget/CartWidget"
import Osito from "../CartWidget/assets/osito.png"


const NavBar = () => {
    return (
        <nav>
            <div>
            <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      <img src={Osito} className="image is-64x64"/>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Comprá
      </a>

      <a class="navbar-item">
        Recetas
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Conocenos
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Quienes somos
          </a>
          <a class="navbar-item">
            Nuestra historia
          </a>
          <a class="navbar-item">
            Contacto
          </a>
          <hr class="navbar-divider"/>
          <a class="navbar-item">
            Sugerencias
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
            </div>
            <CartWidget/>
        </nav>
    )
}


export default NavBar