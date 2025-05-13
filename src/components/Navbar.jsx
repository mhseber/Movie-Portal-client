import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { LuLogIn } from "react-icons/lu";
import { HiOutlineLogin } from "react-icons/hi";
import { FaCashRegister, FaRegAddressBook } from "react-icons/fa6";
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
      .catch((error) => {
        console.log("failed to sign out . Try Again");
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">
          <FaHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="allMovie">
          <BiCameraMovie />
          All Movies
        </NavLink>
      </li>
      <li>
        <NavLink to="community">
          <FaCreativeCommonsBy />
          Community
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="myFavorites">
              <MdFavoriteBorder />
              My Favorites
            </NavLink>
          </li>
          <li>
            <NavLink to="addMovies">
              <FaRegAddressBook />
              Add Movies
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto ">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            {/* Logo */}
            <div className="items-center font-extrabold text-black lg:text-3xl">
              <NavLink to="/">
                <i className="flex gap-2">
                  <BiSolidCameraMovie />
                  Movies World
                </i>
              </NavLink>
            </div>
          </div>
          <div className="hidden navbar-center lg:flex">
            <ul className="px-1 text-red-800 menu menu-horizontal ">{links}</ul>
          </div>
          {/* theme */}
          <div className="lg:pl-8">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="w-10 h-10 fill-current swap-off"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="w-10 h-10 fill-current swap-on"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          {/* login logout */}
          <div className="flex items-center gap-2 text-sky-900 navbar-end">
            {user ? (
              <>
                {/* Profile Image with Dropdown Name */}
                <div className=" dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="border-2 avatar btn btn-ghost border-sky-800 btn-circle"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} alt="user" />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-40 mt-4"
                  >
                    <li className="font-bold text-center">
                      {user.displayName}
                    </li>
                  </ul>
                </div>

                {/* Log Out Button */}
                <button
                  onClick={handleSignOut}
                  className="text-white bg-black hover:bg-gray-800 btn"
                >
                  <HiOutlineLogin />
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className="text-white bg-black hover:bg-gray-800 btn"
                >
                  <LuLogIn />
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="text-white bg-black hover:bg-gray-800 btn"
                >
                  <FaCashRegister />
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
