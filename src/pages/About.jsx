import { Profile } from "../components/Profile"
import { motion } from "motion/react";
import { Heading } from "../components/Heading";
const cn = (...classes) => classes.join(" ");

export const About = () => {
    return <div className={cn('flex flex-col items-center justify-center md:items-start md:flex md:flex-row md:justify-center lg:pt-10 md:gap-15 lg:gap-20 2xl:gap-40 2xl:pt-15 pt-10 bg-gradient-to-t from-[#333130] to-[#151312] md:mask-b-from-50%  mask-b-from-90%',
        'bg-[radial-gradient(1px,transparent_1px)]',
        '[background-size:10px_10px]')}>
        <Profile />
        <div className=" px-5 md:px-0 md:overflow-hidden md:overflow-y-scroll md:h-screen h-full no-scrollbar md:scroll-smooth md:mask-b-from-50% mask-b-from-100% 2xl:w-200 xl:w-150 lg:w-130 md:w-110 w-full md:mt-0 mt-10">
            <motion.div
                initial={{ y: -50, x: -50, scale: 0.8, opacity: 0 }}
                whileInView={{ y: 0, x: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="font-Poppins xl:mb-70 md:mb-50 mb-20">
                <Heading headingTextWhite={"HOW I BECAME "} headingTextGray={"A DEVELOPER"} />
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="2xl:w-180 xl:w-120 md:w-100 2xl:text-lg md:text-[12px] text-[11px] xl:mt-10 mt-5">
                    <p>I completed my B.Tech in Electronics and Communication Engineering in 2025. While I was introduced to programming in my first year with C, it wasn’t until my third year that I seriously dove into software development. <br /> <br /> I began exploring fullstack development through YouTube videos, MDN Docs, and became part of a tech community that consistently pushed me forward. <br /> <br /> Unlike many of my peers, I never found myself truly connected to core electronics — I struggled with concepts like current and voltage, and I knew early on that my interest lay elsewhere. <br /> <br /> That disconnect led me to discover my real passion: building software.  Since then, I’ve built complete web applications from scratch, worked on strengthening my problem-solving skills through regular DSA practice, and explored modern development tools and technologies.</p>
                </motion.div>
            </motion.div>
        </div>

    </div>
}