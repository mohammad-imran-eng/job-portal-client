import Lottie from "lottie-react";
import animationLottie from '../assets/register.json'
import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const { createUser,googleLogin } = useContext(AuthContext);
    const handleGoogleLogin = ()=> {
        googleLogin()
        .then(result=> console.log(result))
        .catch(error=> console.log(error))
    }
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={animationLottie} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold mb-5">Register now!</h1>
                        <div>
                            <button
                                onClick={handleGoogleLogin}
                                className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <FcGoogle className="w-5 h-5" />
                                <span>Google</span>
                            </button>
                        </div>
                        <form onSubmit={handleRegister} className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;