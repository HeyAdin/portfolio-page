import { motion } from 'motion/react'
import { FaTwitter, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import profilePic from '../assets/profilePic.png'
export const Profile = () => {
    return (
        <motion.div
            initial={{ scale: 0.7, opacity: 0 ,y:100 }}
            animate={{ scale: 1, opacity: 1, y:0 }}
            whileHover={{boxShadow:"0px 80px 200px 10px #123458 "}}
            transition={{ duration: 0.7 }}
            className='overflow-hidden relative font-Poppins w-70 md:w-50 lg:min-w-[220px] xl:w-[225px] 2xl:w-[320px] h-130 md:h-95 lg:h-[420px] xl:h-[420px] 2xl:h-[600px] bg-white text-black 2xl:rounded-2xl lg:rounded-xl rounded-xl flex flex-col items-center text-center 2xl:gap-3 lg:gap-1 2xl:py-7 xl:py-4 py-3 2xl:px-4 xl:px-3 lg:px-5 px-3 hover:shadow-md shadow-gray-700 '>
            <svg width="400" height="200" className='h-42 2xl:h-60 xl:h-52 md:h-45 sm:h-52 sm:w-100  md:w-100 2xl:w-100 absolute -top-7 md:-top-6 xl:-top-5 2xl:-top-5 md:-left-30 xl:-left-20 2xl:left-4 z-10 overflow-hidden'>
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
            <img className='mb-2 bg-gradient-to-t from-[#12375f] via-[#103052] to-[#0f2f50] 2xl:w-55 xl:w-43 lg:w-42 md:w-45 rounded-2xl object-cover 2xl:h-60 xl:h-47 lg:h-45  md:h-45' src={profilePic} alt="profileImage" />
            <motion.h1
                initial={{ scale: 0.7, opacity: 0, y:10}}
                animate={{ scale: 1, opacity: 1, y:0}}
                transition={{ duration: 1 }}
                className='font-[700] 2xl:text-4xl lg:text-2xl md:text-xl text-lg 2xl:mb-4 md:mb-3 mb-2'>Adin Ahmad</motion.h1>
            <motion.p
                initial={{ scale: 0.7, opacity: 0, y:10}}
                animate={{ scale: 1, opacity: 1, y:0}}
                transition={{ duration: 1 }}
                className='2xl:mb-3 lg:mb-5 mb-6 z-10 2xl:text-[17px] lg:text-[11px] md:text-[11px] text-[14px] font-[500] text-gray-500'>Electronics by degree, full-stack developer by passion — building complete web applications from scratch.</motion.p>   
            <svg width="400" height="200" className='absolute bottom-6  xl:bottom-0 lg:-bottom-5 md:bottom-2 2xl:right-4 xl:right-1 lg:-right-25 md:-right-25 z-9 overflow-hidden scale-y-[-1] scale-x-[-1]'>
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
                className='flex 2xl:gap-7 xl:gap-5 lg:gap-3 gap-4 text-[#123458] z-10'
               initial={{ scale: 0.7, opacity: 0, y:10}}
                animate={{ scale: 1, opacity: 1, y:0}}
                transition={{ duration: 0.7 }}>
                <a href='https://x.com/adnahmd62' target='_blank' className='2xl:text-2xl text-xl cursor-pointer hover:text-[#a7966e] hover:scale-110 transition-transform duration-200'><FaTwitter /></a>
                <a href='https://www.linkedin.com/in/adin-ahmad-56a495207/' target='_blank' className='2xl:text-2xl text-xl  cursor-pointer hover:text-[#a7966e] hover:scale-110 transition-transform duration-200'><FaLinkedin /></a>
                <a href='https://github.com/HeyAdin?tab=repositories' target='_blank' className='2xl:text-2xl text-xl  cursor-pointer hover:text-[#a7966e] hover:scale-110 transition-transform duration-200'><FaGithub /></a>
                <a href='mailto:adinahmad003@gmail.com' target='_blank' className="2xl:text-2xl text-xl  cursor-pointer hover:text-[#a7966e] hover:scale-110 transition-transform duration-200"><FaEnvelope /></a>
            </motion.ul>
        </motion.div>
    )
}