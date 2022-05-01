import { Navigate } from 'react-router-dom';

//Simulacion de Autenticacion
let auth;
auth = false;

const PrivateRoute = ({ children }) => {
    return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
