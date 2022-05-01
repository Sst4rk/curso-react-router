import React from 'react';
import { useParams } from 'react-router-dom';

const Usuario = () => {
    let { username } = useParams();

    return (
        <div>
            <h3>Perfil del Usurario </h3>
            <p>
                Nombre del Usuario: <b>{username}</b>
            </p>
        </div>
    );
};

export default Usuario;
