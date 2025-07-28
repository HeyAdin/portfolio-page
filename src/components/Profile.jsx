import { motion } from 'motion/react'
import { FaTwitter, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import profilePic from '../assets/profilePic.png'
export const Profile = () => {
    return (
        <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{boxShadow:"0px 0px 200px 10px #123458 "}}
            transition={{ duration: 0.7 }}
            className='overflow-hidden relative font-Poppins lg:w-[270px] lg:h-[500px] border border-1-white bg-white text-black rounded-2xl flex flex-col items-center text-center gap-3 py-7 px-4 hover:shadow-md shadow-gray-700'>
            <svg width="400" height="200" className='absolute -top-3 left-1 z-10 overflow-hidden'>
                <motion.path
                    d="M0 0 C  -100 700, 650 -100, 90 60 S 0 10, 100 -50"
                    stroke="#D4C9BE"
                    strokeWidth="3"
                    strokeDasharray="8 5"
                    fill="none"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            </svg>
            <img className='mb-2 bg-gradient-to-t from-[#12375f] via-[#103052] to-[#0f2f50] w-55 rounded-2xl object-cover lg:h-60' src={profilePic} alt="profileImage" />
            <motion.h1
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className='font-[700] text-4xl mb-4'>Adin Ahmad</motion.h1>
            <motion.p
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className='mb-3 z-10 text-[17px] font-[500] text-gray-500'>Electronics by degree, full-stack developer by passion — building complete web applications from scratch.</motion.p>
            <svg width="400" height="200" className='absolute bottom-0 right-4 z-9 overflow-hidden scale-y-[-1] scale-x-[-1]'>
                <motion.path
                    d="M0 0 C  -100 700, 650 -100, 90 60 S 0 10, 100 -50"
                    stroke="#D4C9BE"
                    strokeWidth="3"
                    strokeDasharray="8 5"
                    fill="none"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
            </svg>
            <motion.ul
                className='flex gap-7 text-[#123458] z-10'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7 }}>
                <a href='https://x.com/adnahmd62' target='_blank' className='text-2xl cursor-pointer hover:text-[#a7966e] hover:scale-110 transition-transform duration-200'><FaTwitter /></a>
                <a href='https://www.linkedin.com/in/adin-ahmad-56a495207/' target='_blank' className='text-2xl cursor-pointer hover:text-[#a7966e] hover:scale-110 transition-transform duration-200'><FaLinkedin /></a>
                <a href='https://github.com/HeyAdin?tab=repositories' target='_blank' className='text-2xl cursor-pointer hover:text-[#a7966e] hover:scale-110 transition-transform duration-200'><FaGithub /></a>
                <a href='mailto:adinahmad003@gmail.com' target='_blank' className="text-2xl cursor-pointer hover:text-[#a7966e] hover:scale-110 transition-transform duration-200"><FaEnvelope /></a>
            </motion.ul>
        </motion.div>
    )
}