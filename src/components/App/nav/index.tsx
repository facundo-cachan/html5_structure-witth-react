const Nav = () => (
    <nav>
        <div role="navigation" aria-label="Main">
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
        </div>
    </nav>
)
export default Nav