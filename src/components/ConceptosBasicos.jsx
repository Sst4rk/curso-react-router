import React from 'react';
import {
    HashRouter as Router, //Para utilizar rutas normales con "/" utilizar BrowserRouter en lugar de HashRouter
    Route,
    Routes,
    Link,
    Navigate,
} from 'react-router-dom';
import Acerca from '../pages/Acerca';
import Contacto from '../pages/Contacto';
import Dashboard from '../pages/Dashboard';
import Error404 from '../pages/Error404';
import Login from '../pages/Login';
import Productos from '../pages/Productos';
import ReactTopics, { Topic } from '../pages/ReactTopics';
import Usuario from '../pages/Usuario';
import MenuConceptos from './MenuConceptos';
import PrivateRoute from './PrivateRoute';

function Home() {
    return (
        <>
            <h3>Home</h3>
            <nav>
                <Link to="/acerca">Acerca</Link> |{' '}
                <Link to="/contacto">Contacto</Link>
            </nav>
        </>
    );
}

const ConceptosBasicos = () => {
    return (
        <div>
            <h2>Conceptos Basicos</h2>
            <Router>
                <MenuConceptos />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="acerca" element={<Acerca />} />
                    <Route path="contacto" element={<Contacto />} />
                    <Route path="usuario/:username" element={<Usuario />} />
                    <Route path="productos" element={<Productos />} />

                    <Route
                        path="/about"
                        element={
                            <>
                                <Navigate to="/acerca" /> //para las
                                redirecciones es mejor utilizar configuraciones
                                del servidor pero se pueden hacer de las
                                siguiente forma o guardar este navigate en un
                                componente
                            </>
                        }
                    ></Route>
                    <Route
                        path="/contact"
                        element={
                            <>
                                <Navigate to="/contacto" />
                            </>
                        }
                    ></Route>

                    <Route path="/react" element={<ReactTopics />}>
                        <Route path=":topic" element={<Topic />} />
                    </Route>

                    <Route path="login" element={<Login />} />
                    <Route
                        path="dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />

                    <Route path="*" element={<Error404 />} />
                </Routes>
            </Router>
        </div>
    );
};

export default ConceptosBasicos;
