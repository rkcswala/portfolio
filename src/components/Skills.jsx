
import React from "react";

import {
    FaNodeJs,
    FaReact,
    FaGithub,
    FaJs,
    FaCss3Alt,
    FaHtml5,
    FaGitAlt,
    FaJava,
    FaPhp,
    FaAws,

} from "react-icons/fa";

import {
    SiMongodb,
    SiTailwindcss,
    SiMysql
} from "react-icons/si";

const Skills = () => {

    const myskills = [
        { icon: <FaReact />, name: "React.js" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiMysql />, name: "Mysql" },
        { icon: <FaJs />, name: "Javascript" },
        { icon: <FaHtml5 />, name: "Html" },
        { icon: <FaCss3Alt />, name: "Css" },
        { icon: <SiTailwindcss />, name: "Tailwindcss" },
        { icon: <FaJava />, name: "Core Java" },
        { icon: <FaPhp />, name: "Php" },
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaGithub />, name: "Github" },



    ]
    return (
        <div>
            <section id="skills">

                <div className="section-title">
                    <small>My Skills</small>
                    <h2>Technologies I Work With</h2>
                </div>

                <div className="skills-container">
                  
                  {
                    myskills.map((item ,index) =>(
                        <div className="skill" key={index}>
                            <div className="skill-icon">
                                {item.icon}
                            </div>
                            <h3>{item.name}</h3>
                        </div>
                    ))
                  }

                   
                </div>
            </section>
        </div>
    );
};

export default Skills;
