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

          {/* login logout */}
          <div className="flex items-center gap-2 text-sky-900 navbar-end">
            {user ? (
              <>
                {user.providerData?.some(
                  (provider) => provider.providerId === "google.com"
                ) && (
                  // Only show image and name if logged in with Google
                  <div className="dropdown dropdown-end">
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
                )}

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
