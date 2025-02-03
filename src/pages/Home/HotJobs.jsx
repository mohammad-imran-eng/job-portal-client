import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const HotJobs = () => {
    const [jobs,setJobs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=> res.json())
        .then(data=> setJobs(data))
    },[])
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
            {
                jobs.map(job=> <JobCard key={job._id} job={job}/>)
            }
        </div>
    );
};

export default HotJobs;