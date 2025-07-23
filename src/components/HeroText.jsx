import { motion } from "motion/react"
import { FaArrowRight, FaCode, FaDownload } from "react-icons/fa";
import subsrciptionManager from '../assets/project1.png'
import payGo from '../assets/project2.png'
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Skills } from "./Skills";
export const HeroText = () => {
    return (
        <div className="overflow-hidden overflow-y-scroll h-screen no-scrollbar scroll-smooth">

            {/* Hero Content */}

            <motion.div
                initial={{ y: -50, x: -50, scale: 0.8, opacity: 0 }}
                animate={{ y: 0, x: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}>
                <h1 className=" text-9xl font-[700] font-Poppins">SOFTWARE</h1>
                <h1 className=" text-9xl font-[700] font-Poppins text-[#363334]">DEVELOPER</h1>
                <p className="w-155 text-lg font-[500] text-[#868686] font-Poppins py-4 px-2" >I’m passionate about building fullstack applications that solve real problems. Always exploring new technologies and turning ideas into clean, usable products</p>

            </motion.div>
            <div className="mt-10 flex gap-8 mb-15">
                <DataCard number={"3+"} title={"Completed Projects"} />
                <DataCard number={"1k+"} title={"Users visted on Project"} />
            </div>
            <motion.div
                initial={{ y: -50, x: -50, scale: 0.8, opacity: 0 }}
                animate={{ y: 0, x: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="mb-20 w-32">
                <Button buttonText={"Resume"} buttonIcon={<FaDownload />} />
            </motion.div>

            {/* Projects Section */}
            <motion.div
                initial={{ y: -50, x: -50, scale: 0.8, opacity: 0 }}
                whileInView={{ y: 0, x: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="font-Poppins mb-20">
                <Heading headingTextWhite={"RECENT"} headingTextGray={"PROJECTS"} />
                <ProjectsCard image={subsrciptionManager} projectName={"Subscription Manager"} projectDescription={"Forgot which subscriptions to cancel and you paid it unkowingly Dont worry we will handle this"} />
                <ProjectsCard image={payGo} projectName={"PayGo"} projectDescription={"A digital wallet to send and recieve money from your friends and family"} />
            </motion.div>

            {/* Skills & Technologies Sections */}
            <div className="font-Poppins mb-20">
                <Heading headingTextWhite={"SKILLS &"} headingTextGray={"TECHNOLOGIES"} />
                <Skills />
            </div>

            {/* About Me Section */}

            <div className="mb-80 font-Poppins">
                <Heading headingTextWhite={"HOW I BECAME "} headingTextGray={"A DEVELOPER"} />
                <div className="w-180 text-lg mt-10">
                    <p>I completed my B.Tech in Electronics and Communication Engineering in 2025. While I was introduced to programming in my first year with C, it wasn’t until my third year that I seriously dove into software development. <br /> <br /> I began exploring fullstack development through YouTube videos, MDN Docs, and became part of a tech community that consistently pushed me forward. <br /> <br /> Unlike many of my peers, I never found myself truly connected to core electronics — I struggled with concepts like current and voltage, and I knew early on that my interest lay elsewhere. <br /> <br /> That disconnect led me to discover my real passion: building software.  Since then, I’ve built complete web applications from scratch, worked on strengthening my problem-solving skills through regular DSA practice, and explored modern development tools and technologies.</p>
                </div>
            </div>
        </div>
    )
}

const DataCard = ({ number, title }) => {
    return <motion.div
        initial={{ y: -50, x: -50, scale: 0.8, opacity: 0 }}
        animate={{ y: 0, x: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-30  text-center">
        <h1 className="text-6xl font-Poppins font-[600] mb-2">{number}</h1>
        <p className="text-md font-[500] font-Poppins text-[#868686]">{title}</p>
    </motion.div>
}

const ProjectsCard = ({ projectName, projectDescription, image }) => {
    return <motion.div
        initial={{ y: 50, x: -50, scale: 0.8, opacity: 0 }}
        whileInView={{ y: 0, x: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{once : true}}    
        className="w-full h-45 mt-10 overflow-hidden flex items-center px-4 py-2 transform hover:-translate-y-1 duration-300 gap-5 hover:bg-[#1C1A19] rounded-2xl">
        <img className="h-40 rounded-2xl" src={image} alt="" />
        <div>
            <div className="w-120 mb-4">
                <h1 className="text-2xl font-bold mb-3">{projectName}</h1>
                <p className="text-md font-[500] font-Poppins text-[#868686] px-1">{projectDescription}</p>
            </div>
            <div className=" flex gap-4">
                <Button buttonText={"Code"} buttonIcon={<FaCode />} />
                <Button buttonText={"Preview"} buttonIcon={<FaArrowRight />} />
            </div>
        </div>

    </motion.div>
}