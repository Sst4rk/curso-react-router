import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Productos = () => {
    //let location = useLocation();

    // console.log(location);

    let { search } = useLocation();
    let navigate = useNavigate();

    const LIMIT = 20;

    let query = new URLSearchParams(search);
    let start = parseInt(query.get('inicio')) || 1;
    let end = parseInt(query.get('fin')) || LIMIT;

    //console.log(start, end);

    useEffect(() => {
        if (start < 0 || end < 0) {
            console.log('test');
            navigate('/404', { replace: true });
        }
    }, []);

    //console.log(start, end);

    //console.log(navigate);

    const handlePrev = (e) => {
        navigate(`?inicio=${start - LIMIT}&fin=${end - LIMIT}`);
    };
    const handleNext = (e) => {
        navigate(`?inicio=${start + LIMIT}&fin=${end + LIMIT}`);
    };

    return (
        <div>
            <h3>Productos</h3>
            <p>
                Mostrando productos del <b>{start}</b> la <b>{end}</b>
            </p>
            {start > LIMIT && <button onClick={handlePrev}>Atras</button>}
            <button onClick={handleNext}>Adelante</button>
        </div>
    );
};

export default Productos;
