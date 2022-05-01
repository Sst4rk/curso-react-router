import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export const Topic = () => {
    let { topic } = useParams();

    return (
        <div>
            <h2>{topic}</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                perspiciatis quasi, quisquam incidunt ducimus itaque reiciendis
                illo, quia aliquam laboriosam voluptas id natus rerum. Tempora
                voluptates voluptate maiores vel dolorum!
            </p>
        </div>
    );
};

const ReactTopics = () => {
    return (
        <div>
            <h3>Temas de React</h3>
            <ul>
                <li>
                    <Link to="jsx">JSX</Link>
                </li>
                <li>
                    <Link to="props">Props</Link>
                </li>
                <li>
                    <Link to="estado">Estado</Link>
                </li>
                <li>
                    <Link to="componentes">Componentes</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};

export default ReactTopics;

//Esta es una version actualizada de las Rutas anidadas con react y react-router pero con las versiones 18 y 6 respectivamente
