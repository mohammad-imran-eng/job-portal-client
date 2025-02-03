import { motion } from "motion/react"
import team1 from "../../assets/team/team-1.jpg"
import team2 from "../../assets/team/team-2.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                <motion.img
                    src={team1}
                    animate={{y:[50,100,50]}}
                    transition={{duration:10,delay:1,repeat: Infinity}}
                    className="max-w-sm w-64 rounded-t-[40px] border-l-4 border-b-4 border-blue-500 rounded-br-[40px] shadow-2xl" />
                <motion.img
                    src={team2}
                    animate={{x:[120,50,120]}}
                    transition={{duration:10,delay:1,repeat: Infinity}}
                    className="max-w-sm w-64 rounded-t-[40px] border-l-4 border-b-4 border-blue-500 rounded-br-[40px] shadow-2xl" />
                </div>
                <div className="flex-1">
                    <motion.h1 
                    className="text-5xl font-bold"
                    animate={{x: 50}}
                    transition={{
                        duration: 3,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatDelay: 1,
                    }}
                    >
                    Latest <motion.span animate={{color: ['#3674B5','#493D9E','#B771E5']}} transition={{duration:2,repeat:Infinity}}>Jobs</motion.span> for You!
                    </motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;