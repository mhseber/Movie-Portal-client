import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="allMovie">All Movies</NavLink></li>
        <li><NavLink to="community">Community</NavLink></li>

    </>
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className=" container mx-auto flex justify-between items-center py-4 px-4 ">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        {/* Logo */}
                        <div className="text-3xl font-extrabold text-black flex items-center">

                            <NavLink to="/"><i>Movies World</i></NavLink>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-red-800 ">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end gap-2 text-red-800">
                        <Link to="/auth/login" className="btn">Login</Link>

                        <Link to="/auth/register" className="btn">Register</Link >
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;