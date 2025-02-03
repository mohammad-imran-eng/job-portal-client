import humanImg from "../../assets/category/human.svg"
import managementImg from "../../assets/category/management.svg"
import researchImg from "../../assets/category/research.svg"
import retailImg from "../../assets/category/retail.svg"
import securityImg from "../../assets/category/security.svg"
import { motion } from 'motion/react';

const Category = () => {
    return (
        <>
        <div className="text-center my-15">
            <h1 className="text-4xl font-medium">Browse by category</h1>
            <p className="text-xl text-gray-600">Find the job that’s perfect for you. about 800+ new jobs everyday</p>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-5">
            <motion.div whileHover={{y:-5}} transition={{duration: 0.2}} className="flex items-center border-[1px] border-gray-300 hover:border-blue-400 p-5 rounded-2xl">
                <div>
                    <div><img className="mr-1" src={humanImg} alt="" /></div>
                </div>
                <div>
                    <div className="text-[17px] font-bold text-gray-700">Human Resource</div>
                    <div className="text-gray-600">165 Jobs Available</div>
                </div>
            </motion.div>
            <motion.div whileHover={{y:-5}} transition={{duration: 0.2}} className="flex items-center border-[1px] border-gray-300 hover:border-blue-400 p-5 rounded-2xl">
                <div>
                    <div><img className="mr-1" src={managementImg} alt="" /></div>
                </div>
                <div>
                    <div className="text-[17px] font-bold text-gray-700">Management</div>
                    <div className="text-gray-600">965 Jobs Available</div>
                </div>
            </motion.div>
            <motion.div whileHover={{y:-5}} transition={{duration: 0.2}} className="flex items-center border-[1px] border-gray-300 hover:border-blue-400 p-5 rounded-2xl">
                <div>
                    <div><img className="mr-1" src={researchImg} alt="" /></div>
                </div>
                <div>
                    <div className="text-[17px] font-bold text-gray-700">Market Research</div>
                    <div className="text-gray-600">165 Jobs Available</div>
                </div>
            </motion.div>
            <motion.div whileHover={{y:-5}} transition={{duration: 0.2}} className="flex items-center border-[1px] border-gray-300 hover:border-blue-400 p-5 rounded-2xl">
                <div>
                    <div><img className="mr-1" src={retailImg} alt="" /></div>
                </div>
                <div>
                    <div className="text-[17px] font-bold text-gray-700">Retail & Products</div>
                    <div className="text-gray-600">165 Jobs Available</div>
                </div>
            </motion.div>
            <motion.div whileHover={{y:-5}} transition={{duration: 0.2}} className="flex items-center border-[1px] border-gray-300 hover:border-blue-400 p-5 rounded-2xl">
                <div>
                    <div><img className="mr-1" src={securityImg} alt="" /></div>
                </div>
                <div>
                    <div className="text-[17px] font-bold text-gray-700">Security Analyst</div>
                    <div className="text-gray-600">120 Jobs Available</div>
                </div>
            </motion.div>
        </div>
        </>
    );
};

export default Category;