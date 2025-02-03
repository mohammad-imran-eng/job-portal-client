import { useState } from "react";
import { FaMapMarkerAlt, FaBriefcase, FaCalendarAlt, FaMoneyBillAlt, FaEnvelope } from 'react-icons/fa';
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const loadedData = useLoaderData();
    const [job,setJob] = useState(loadedData);
    return (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden my-6">
      {/* Header Section */}
      <div className="flex items-center p-6 bg-gradient-to-r from-blue-500 to-indigo-600">
        <img
          src={job.company_logo}
          alt={`${job.company} logo`}
          className="w-16 h-16 rounded-full border-2 border-white"
        />
        <div className="ml-4">
          <h1 className="text-2xl font-bold text-white">{job.title}</h1>
          <p className="text-sm text-white opacity-90">{job.company}</p>
        </div>
      </div>

      {/* Body Section */}
      <div className="p-6">
        {/* Job Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <span className="text-gray-700">{job.location}</span>
          </div>
          <div className="flex items-center">
            <FaBriefcase className="text-gray-500 mr-2" />
            <span className="text-gray-700">{job.jobType}</span>
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <span className="text-gray-700">Apply by: {job.applicationDeadline}</span>
          </div>
          <div className="flex items-center">
            <FaMoneyBillAlt className="text-gray-500 mr-2" />
            <span className="text-gray-700">
              {job.salaryRange.min} - {job.salaryRange.max} {job.salaryRange.currency.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-6">{job.description}</p>

        {/* Requirements */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Requirements</h2>
          <ul className="list-disc list-inside text-gray-700">
            {job.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-700">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>

        {/* HR Contact */}
        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact HR</h2>
          <div className="flex items-center">
            <FaEnvelope className="text-gray-500 mr-2" />
            <a href={`mailto:${job.hr_email}`} className="text-blue-500 hover:underline">
              {job.hr_name} - {job.hr_email}
            </a>
          </div>
        </div>
      </div>
      <Link to={`/jobApply/${job._id}`}>
      <button className="btn btn-primary ml-5 mb-5">Apply now</button>
      </Link>
    </div>
    );
};

export default JobDetails;