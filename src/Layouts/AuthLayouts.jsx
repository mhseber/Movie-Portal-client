import { Outlet } from "react-router-dom";

const AuthLayouts = () => {
    return (
        <div className="bg-gray-100 min-h-screen">

            <Outlet />
        </div>
    );
};

export default AuthLayouts;