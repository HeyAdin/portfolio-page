import { Profile } from "../components/Profile"
import { motion } from "motion/react";
import { Heading } from "../components/Heading";
import { ProjectsCard } from "../components/HeroText";
import subsrciptionManager from '../assets/project1.png'
import payGo from '../assets/project2.png'
const cn = (...classes) => classes.join(" ");

export const Project = () => {
    return <div className={cn('flex flex-col items-center justify-center md:items-start md:flex md:flex-row md:justify-center lg:pt-10 md:gap-15 lg:gap-20 2xl:gap-40 2xl:pt-15 pt-10 bg-gradient-to-t from-[#333130] to-[#151312] md:mask-b-from-50%  mask-b-from-90%',
        'bg-[radial-gradient(1px,transparent_1px)]',
        '[background-size:10px_10px]')}>
        <Profile />
        <div className=" px-5 md:px-0 md:overflow-hidden md:overflow-y-scroll md:h-screen h-full no-scrollbar md:scroll-smooth md:mask-b-from-50% mask-b-from-100% 2xl:w-200 xl:w-150 lg:w-130 md:w-110 w-full md:mt-0 mt-10">
            <motion.div
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 0.7 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="font-Poppins xl:mb-70 md:mb-50 mb-20">
                <Heading headingTextWhite={"RECENT"} headingTextGray={"PROJECTS"} />
                <ProjectsCard image={subsrciptionManager} projectName={"Subscription Manager"} projectDescription={"Forgot which subscriptions to cancel and you paid it unkowingly Dont worry we will handle this"} />
                <ProjectsCard image={payGo} projectName={"PayGo"} projectDescription={"A digital wallet to send and recieve money from your friends and family"} />
                <ProjectsCard image={subsrciptionManager} projectName={"Subscription Manager"} projectDescription={"Forgot which subscriptions to cancel and you paid it unkowingly Dont worry we will handle this"} />
                <ProjectsCard image={payGo} projectName={"PayGo"} projectDescription={"A digital wallet to send and recieve money from your friends and family"} />
                <ProjectsCard image={subsrciptionManager} projectName={"Subscription Manager"} projectDescription={"Forgot which subscriptions to cancel and you paid it unkowingly Dont worry we will handle this"} />
                <ProjectsCard image={payGo} projectName={"PayGo"} projectDescription={"A digital wallet to send and recieve money from your friends and family"} />
            </motion.div>
        </div>

    </div>
}