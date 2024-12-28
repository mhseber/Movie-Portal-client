import { Link } from "react-router-dom";
import loginLottie from "../../src/assets/lottie/login.json"
import Lottie from "lottie-react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    const { singInUser, signInWithGoogle } = useContext(AuthContext);


    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        singInUser(email, password)
            .then(result => {
                console.log('sign in ', result.user)
            })
            .catch(error => {
                console.log(error)
            })
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                console.log("Google sign-in success:", result.user);
            })
            .catch((error) => {
                console.error("Google sign-in error:", error);
            });
    };
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-xl shadow-black rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-black">User Login</h1>
                <form onSubmit={handleSignIn}>
                    {/* Email Field */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
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
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
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
                        className="w-full  text-white py-2 rounded-md bg-gradient-to-r from-gray-500 to-gray-800  font-semibold"
                    >
                        Login
                    </button>
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full mt-4 btn   text-black font-bold text-xl ">
                        <FcGoogle />
                        Log In With Google</button>
                </form>
                <p className="text-center  font-bold pt-5  ">
                    Dont't Have An Account ?
                    <Link to="/auth/register"><span className="text-black pl-5">Register</span></Link>
                </p>
            </div>
            <div className="text-center lg:text-left w-96 pl-4">
                <Lottie animationData={loginLottie}></Lottie>
            </div>
        </div>
    );
};

export default Login;