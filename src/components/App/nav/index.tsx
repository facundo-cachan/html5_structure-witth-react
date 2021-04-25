const Nav = () => (
    <nav role="navigation" aria-label="Main">
        <ul>
            <li><a href="#!">Inicio</a></li>
            <li><a href="#!">Nuestro equipo</a></li>
            <li><a href="#!">Proyectos</a></li>
            <li><a href="#!">Contacto</a></li>
        </ul>
        <form>
            <input type="search" name="q" placeholder="Buscar" />
            <input type="submit" value="¡Vamos!" />
        </form>
    </nav>
)
export default Nav