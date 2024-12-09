import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayouts = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default AuthLayouts;