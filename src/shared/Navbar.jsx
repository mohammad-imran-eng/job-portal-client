import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
import jobLogo from "../../src/assets/job-logo.png"

const Navbar = () => {
    const {user,signOutUser} = useContext(AuthContext);
    const handleSignOut = ()=> {
        signOutUser().then(()=> {
            console.log("sign out successful");
        }).catch(error=> {
            console.log(error);
        })
    }
    const links = (
        <>
            <li><NavLink className='/'>Home</NavLink></li>
            <li><NavLink className='/myApplications'>My Applications</NavLink></li>
            <li><NavLink className='/'>Home</NavLink></li>
        </>
    );
    return (
        <div className="navbar custom-style bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                       {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img className="w-12" src={jobLogo} alt="" />
                    <h3>Job Portal</h3>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user? <button className="btn" onClick={handleSignOut}>Logout</button> : <>
                    <Link to='/register' className="hover:underline ">Register</Link>
                    <Link to='/login' className="btn ml-3">Sign In</Link>
                </>}
                
            </div>
        </div>
    );
};

export default Navbar;
