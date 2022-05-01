import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const MenuConceptos = () => {
    return (
        <nav>
            <ol>
                <li>
                    <span>Enlaces HTML ( no recomendado ): </span>
                    <a href="/">Home</a>
                    <a href="/acerca">Acerca</a>
                    <a href="/contacto">Contacto</a>
                </li>
                <li>
                    <span>Componente Link: </span>
                    <Link to="/">Home</Link>
                    <Link to="/acerca">Acerca</Link>
                    <Link to="/contacto">Contacto</Link>
                </li>
                <li>
                    <span>Componente NavLink: </span>
                    <NavLink
                        to="/"
                        className={
                            ({ isActive }) => (isActive ? 'is-active' : '') //esto es para cambiar el valor por defecto de la clase de css active a otra clase custom
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink to="/acerca" className=".active">
                        Acerca
                    </NavLink>
                    <NavLink to="/contacto" className=".active">
                        Contacto
                    </NavLink>
                    <NavLink to="/productos" className=".active">
                        Productos
                    </NavLink>
                </li>
                <li>
                    <span>Parametros: </span>
                    <Link to="/usuario/luis"> Luis</Link>
                    <Link to="/usuario/alexis">Alex</Link>
                </li>
                <li>
                    <span>Parametros de Consulta: </span>
                    <Link to="/productos">Productos</Link>
                </li>
                <li>
                    <span>Redirecciones: </span>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <span>Rutas Anidadas:</span>

                    <Link to="/react">React</Link>
                </li>
                <li>
                    <span>Rutas Privadas</span>
                    <Link to="/login">Login</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ol>
        </nav>
    );
};

export default MenuConceptos;
