import { motion } from 'motion/react'
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from '../assets/profilePic.png'
export const Profile = () => {
    return (
        <motion.div initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className='overflow-hidden relative font-Poppins w-[320px] h-[620px] border border-1-white bg-white text-black rounded-2xl flex flex-col items-center text-center gap-3 py-8 px-4'>
            <svg width="400" height="200" className='absolute top-0 left-1 z-10 overflow-hidden'>
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
            <img className='mb-2 bg-gradient-to-t from-[#12375f] via-[#103052] to-[#0f2f50] w-60 rounded-2xl object-cover h-70' src={profilePic} alt="profileImage" />
            <motion.h1 initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }} className='font-[700] text-4xl mb-6'>Adin Ahmad</motion.h1>
            <motion.p initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }} className='mb-2 z-10 text-md font-light text-gray-600'>Electronics by degree, full-stack developer by passion — building complete web applications from scratch.</motion.p>
            <svg width="400" height="200" className='absolute bottom-0 right-4 z-10 overflow-hidden scale-y-[-1] scale-x-[-1]'>
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
            <motion.ul className='list-none flex gap-7 text-[#123458] z-10'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7 }}>
                <li className='text-2xl ' ><FaTwitter /></li>
                <li className='text-2xl '><FaLinkedin /></li>
                <li className='text-2xl '><FaEnvelope /></li>
            </motion.ul>
        </motion.div>
    )
}