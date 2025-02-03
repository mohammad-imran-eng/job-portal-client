import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

const JobApply = () => {

    const handleJobApply = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedinUrl.value;
        const github = form.githubUrl.value;
        const resume = form.resumeUrl.value;
        console.log({linkedIn,github,resume});
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleJobApply}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Profile Links</h2>

        {/* LinkedIn URL Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            LinkedIn URL
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              <FaLinkedin className="h-5 w-5" />
            </span>
            <input
              type="url"
              name="linkedinUrl"
              placeholder="https://linkedin.com/in/username"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* GitHub URL Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            GitHub URL
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              <FaGithub className="h-5 w-5" />
            </span>
            <input
              type="url"
              name="githubUrl"
              placeholder="https://github.com/username"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Resume URL Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Resume URL
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              <FaFilePdf className="h-5 w-5" />
            </span>
            <input
              type="url"
              name="resumeUrl"
              placeholder="https://example.com/resume.pdf"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Apply
        </button>
      </form>
    </div>
    );
};

export default JobApply;