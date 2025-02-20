import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (user) {
        return children
    }

    return <Navigate to="/auth/login"></Navigate>
};

export default PrivateRoute;