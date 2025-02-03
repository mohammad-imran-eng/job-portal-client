import hireOne from "../../assets/hire/hire1.jpg"
import hireTwo from "../../assets/hire/hire2.jpg"
import { MdOutlineGppGood } from "react-icons/md";


const Hire = () => {
    return (
        <div className="border-1 border-gray-200 rounded-sm my-20">
            <div className="md:grid sm:grid-cols-2 lg:grid-cols-5">
                <div className="grid items-center w-[200px]">
                    <img src={hireOne} alt="" />
                </div>
                <div className="grid items-center">
                    <h3><span className="block text-2xl font-bold text-gray-500">We are</span> <span className="text-5xl font-bold text-gray-700">Hiring</span></h3>
                </div>
                <div className="grid items-center mt-3">
                    <h3 className="text-[22px] text-gray-800">Let’s <span className="text-blue-400">Work</span> Together
                    & <span className="text-blue-400">Explore</span> Opportunities</h3>
                </div>
                <div className="flex justify-center items-center h-[50px] w-[120px] p-2 border-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md mt-15">
                    <MdOutlineGppGood />
                    <button className="ml-1"> Apply now</button>
                </div>
                <div className="grid items-center w-[150px]">
                    <img src={hireTwo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hire;