import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { LuLogIn } from "react-icons/lu";
import { HiOutlineLogin } from "react-icons/hi";
import { FaCashRegister } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { BiCameraMovie, BiSolidCameraMovie } from "react-icons/bi";
import { FaCreativeCommonsBy } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Successful Log Out");
      })
      .catch(() => {
        console.log("Failed to sign out. Try Again.");
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className="flex items-center gap-1">
          <FaHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allMovie" className="flex items-center gap-1">
          <BiCameraMovie />
          All Movies
        </NavLink>
      </li>
      <li>
        <NavLink to="/community" className="flex items-center gap-1">
          <FaCreativeCommonsBy />
          Community
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/myFavorites" className="flex items-center gap-1">
            <MdFavoriteBorder />
            My Favorites
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl lg:py-4">
        {/* Left Side: Logo + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Mobile Dropdown */}
          <div className="lg:hidden dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-white rounded-box w-52"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center text-xl font-extrabold text-black lg:text-3xl"
          >
            <BiSolidCameraMovie className="mr-1" />
            Movies World
          </NavLink>
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="gap-2 px-1 font-medium menu menu-horizontal text-sky-900">
            {links}
          </ul>
        </div>

        {/* Right Side: Auth Buttons */}
        <div className="flex items-center gap-2">
          {user ? (
            <>
              {user.providerData?.some(
                (provider) => provider.providerId === "google.com"
              ) && (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="font-semibold normal-case btn btn-ghost text-sky-800"
                  >
                    {user.displayName || "User"}
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-40 mt-2"
                  >
                    <li className="font-medium text-center">{user.email}</li>
                  </ul>
                </div>
              )}
              <button
                onClick={handleSignOut}
                className="text-white bg-black btn hover:bg-gray-800"
              >
                <HiOutlineLogin />
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="text-white bg-black btn hover:bg-gray-800"
              >
                <LuLogIn />
                Login
              </Link>
              <Link
                to="/auth/register"
                className="text-white bg-black btn hover:bg-gray-800"
              >
                <FaCashRegister />
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
