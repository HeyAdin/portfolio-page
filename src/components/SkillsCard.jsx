import { motion } from "motion/react"
export const SkillsCard = ({ image, skillsTitle, skillsSubtitle }) => {
    return <motion.div
    initial={{opacity:0, y :30}}
    whileInView={{opacity:1 , y:0}}
    whileHover={{ boxShadow:"0px 0px 20px 0px white"}}
    transition={{duration:0.3}}
    viewport={{once : true}}
        className="flex gap-7 mx-4 my-4 hover:bg-[#1C1A19] items-center p-2 rounded-xl">
        <img src={image} alt={skillsTitle} className="w-15 rounded-xl bg-white " />
        <div className="font-Poppins">
            <h1 className="text-2xl font-[600]">{skillsTitle}</h1>
            <p className="text-md text-[#868686]">{skillsSubtitle}</p>
        </div>
    </motion.div>
}