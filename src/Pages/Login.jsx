import { Link, useNavigate } from "react-router-dom";
import loginLottie from "../../src/assets/lottie/login.json";
import Lottie from "lottie-react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Login = () => {
  const { singInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    singInUser(email, password)
      .then((result) => {
        console.log("sign in ", result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("Google sign-in success:", result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged in with Google successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl shadow-black">
        <h1 className="mb-6 text-2xl font-bold text-center text-black">
          User Login
        </h1>
        <form onSubmit={handleSignIn}>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Forget Password Link */}
          <div className="mb-6 text-right">
            <a
              href="/auth/register"
              className="text-sm text-black hover:underline"
            >
              Forgat Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white rounded-md bg-gradient-to-r from-gray-500 to-gray-800"
          >
            Login
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="w-full mt-4 text-xl font-bold text-black btn "
          >
            <FcGoogle />
            Log In With Google
          </button>
        </form>
        <p className="pt-5 font-bold text-center ">
          Dont't Have An Account ?
          <Link to="/auth/register">
            <span className="pl-5 text-black">Register</span>
          </Link>
        </p>
      </div>
      <div className="pl-4 text-center lg:text-left w-96">
        <Lottie animationData={loginLottie}></Lottie>
      </div>
    </div>
  );
};

export default Login;
