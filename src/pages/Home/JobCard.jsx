import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";


const JobCard = ({ job }) => {
    const { _id,title, location, jobType, category, applicationDeadline, salaryRange, company, description, requirements, responsibilities, company_logo } = job;
    return (
        <div>
            <div className="card gap-2 shadow-sm">
                <div className="flex gap-2 ml-5">
                    <figure>
                        <img
                            className="w-14"
                            src={company_logo} />
                    </figure>
                    <div>
                        <h3>{company}</h3>
                        <p className="flex items-center gap-1"> <CiLocationOn /> {location}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-between">
                        <div className="flex flex-wrap gap-2">
                            {
                                requirements.map(skill=> <span key={skill._id} className="border-1 border-gray-300 rounded-md py-1 px-2 bg-blue-50 text-gray-800 hover:bg-white cursor-pointer">{skill}</span>)
                            }
                        </div>
                        <div className="flex gap-x-10">
                            <p className="text-[16px] font-semibold text-blue-600">{salaryRange.min}- {salaryRange.max} {salaryRange.currency}</p>
                            <Link to={`/jobs/${_id}`}>
                            <button className="btn bg-blue-600 hover:bg-blue-700 text-white">Apply</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;