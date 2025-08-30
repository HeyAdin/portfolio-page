import { motion } from "motion/react"
export const Button = ({ buttonText, buttonIcon, buttonLink }) => {
    return <motion.div
        whileHover={{
            y: -5,
            transition: { duration: 0.3, ease: "linear" },
        }}
    >
        <a href={buttonLink} className=" cursor-pointer 2xl:text-lg xl:text-[12px] font-[500] flex 2xl:gap-3 xl:gap-2 items-center bg-white  xl:mx-2 text-[#123458] 2xl:px-3 xl:px-2  2xl:py-1 xl:py-[4px] rounded-lg justify-center">{buttonText} {buttonIcon}</a>
    </motion.div>
}