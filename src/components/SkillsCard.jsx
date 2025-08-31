import { motion } from "motion/react"
export const SkillsCard = ({ image, skillsTitle, skillsSubtitle }) => {
    return <motion.div
    initial={{opacity:0, y :30}}
    whileInView={{opacity:1 , y:0}}
    whileHover={{ boxShadow:"0px 0px 20px 0px white"}}
    transition={{duration:0.3}}
    viewport={{once : true}}
        className="flex 2xl:gap-7 xl:gap-5 lg:gap-2 gap-4 2xl:mx-4 md:mx-2 mx-1 2xl:my-4 md:my-3 my-1 hover:bg-[#1C1A19] items-center 2xl:p-2 xl:px-4 md:px-1 xl:py-2 md:py-1 rounded-xl">
        <img src={image} alt={skillsTitle} className="2xl:w-15 md:w-11 w-11 rounded-xl bg-white " />
        <div className="font-Poppins">
            <h1 className="2xl:text-2xl xl:text-lg md:text-sm text-[12px] font-[600]">{skillsTitle}</h1>
            <p className="2xl:text-md xl:text-[11px] md:text-[10px] text-[10px] text-[#868686]">{skillsSubtitle}</p>
        </div>
    </motion.div>
}