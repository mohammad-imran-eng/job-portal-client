import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className="h-screen grid justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(!user){
        return <Navigate state={location.pathname} to='/login'/>
    }
    return children;
};

export default PrivateRoute;