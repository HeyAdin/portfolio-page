import { SkillsCard } from "./SkillsCard"
import reactImg from '../assets/react.png';
import javascriptImg from '../assets/javascript.png';
import javaImg from '../assets/java.png';
import expressImg from '../assets/express.png';
import gitImg from '../assets/git.png';
import gitHubImg from '../assets/github.png';
import mongoDBImg from '../assets/mongodb.png';
import nodeJsImg from '../assets/node-js.png';
import cloudFlareImg from '../assets/cloudflare.png';
import tailwindCssImg from '../assets/tailwind-css.png';
import typescriptImg from '../assets/typescript.png';
import postgresqlImg from '../assets/postgresql.png';
const skills = [{
        title: "React.js",
        subTitle: "Javascript Library",
        img: reactImg
    }, {
        title: "Javascript",
        subTitle: "Programming Language",
        img: javascriptImg
    },{
        title : "Java",
        subTitle : "Programming Language",
        img : javaImg
    },{
        title : "Node.js",
        subTitle : "Javascript Runtime",
        img : nodeJsImg
    },{
        title : "Express.js",
        subTitle : "Node.js Framework",
        img : expressImg
    },{
        title : "PostgreSQL",
        subTitle : "Object Relational DBMS",
        img : postgresqlImg
    },{
        title : "TailwindCss",
        subTitle : "CSS Framework",
        img : tailwindCssImg
    },{
        title : "MongoDB",
        subTitle : "NoSQL DBMS ",
        img : mongoDBImg
    },{
        title : "Typescript",
        subTitle : "Programming Language",
        img : typescriptImg
    },{
        title : "Cloudflare",
        subTitle : "Serverless backend deployment",
        img : cloudFlareImg
    },{
        title : "Git",
        subTitle : "Version Control System",
        img : gitImg
    },{
        title : "GitHub",
        subTitle : "Web Based VCS",
        img : gitHubImg
    }];
export const Skills = () => {
    
    return <div>
        <div className="grid grid-cols-2 2xl:mt-10 md:mt-5 mt-5">
            {skills.map((skill,index)=>{
                return <div key={index}>
                    <SkillsCard image={skill.img} skillsTitle={skill.title} skillsSubtitle={skill.subTitle} />
                </div>
            })}
        </div>
    </div>
}