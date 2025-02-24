import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const MyApplications = () => {
    const {user} = useAuth();
    
    useEffect(()=> {
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
        .then(res=> res.json())
        .then(data=> console.log(data))
    },[user.email])

    return (
        <div>
            
        </div>
    );
};

export default MyApplications;