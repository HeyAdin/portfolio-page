import { motion } from 'motion/react'
export const Navbar = () => {
    const navList = [{
        icon: <li className="transform hover:scale-130 duration-300 hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" className="2xl:size-7 xl:size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        </li>,
        title: "Home"
    },
    {
        icon: <li className="transform hover:scale-130 duration-300 hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" className="2xl:size-7 xl:size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
        </svg>
        </li>,
        title: "Projects"
    },
    {
        icon: <li className="transform hover:scale-130 duration-300 hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" className="2xl:size-7 xl:size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
        </li>,
        title: "Skills"
    },
    {
        icon: <li className="transform hover:scale-130 duration-300 hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" className="2xl:size-7 xl:size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        </li>,
        title: "About me"
    },
    {
        icon: <li className="transform hover:scale-130 duration-300 hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" className="2xl:size-7 xl:size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>
        </li>,
        title: "Contact me"
    }]

    return <div className=" flex justify-center items-center ">
        <motion.div
            initial={{
                scale: 0,
                y: 10
            }}
            animate={{
                scale: 1,
                y: 0
            }}
            transition={{
                duration: 0.4
            }} className=" bg-[#1C1A19] flex items-center justify-center py-2 lg:py-3 xl:py-2 2xl:py-4 px-3 lg:px-5 xl:px-4 2xl:px-6 list-none gap-7 xl:gap-7 2xl:gap-12 rounded-3xl">
            {
                navList.map((item, index) => (
                    <motion.div
                        initial={{
                            scale: 0,
                            y: 10
                        }}
                        animate={{
                            scale: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.7
                        }} key={index} className="relative group flex flex-col justify-center items-center">
                        <div className="text-white cursor-pointer group-hover:text-[#93b1d1] size-5">{item.icon}</div>
                        <div className="absolute  mb-2 2xl:left-4 2xl:top-7 xl:left-2/4 xl:top-4/4 -translate-x-1/2 text-white 2xl:text-sm xl:text-[10px] font-bold px-2 py-1 rounded 
                          opacity-0 group-hover:opacity-100 transition-all 
                          duration-400 whitespace-nowrap z-1 scale-0 group-hover:scale-90 group-hover:text-[#93b1d1]">
                            {item.title}
                        </div>
                    </motion.div>
                ))
            }
        </motion.div>
    </div>
}