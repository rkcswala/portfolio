import React from 'react'
import Internship from '../static/Internship'
import School from '../static/School'


const Education = () => {

    const internshipData = [
        {
            title: "MERN-Full Stack Developer Intern",
            company: "Chay aur code",
            duration: "Jan 2026 – Jun 2026",
            description: "Worked on developing responsive web applications and REST APIs. Collaborated with developers to build scalable and user-friendly features.",
            skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Git"]
        },
        {
            title: "Frontend Developer Intern",
            company: "Geeta Mittal Career and Development Centre, Jaipur",
            duration: "1 Jul 2025 – 15 Sep 2025",
            description: "Designed and developed responsive websites using HTML, CSS and JavaScript. Improved website UI, performance and mobile responsiveness.",
            skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "SQL"]
        },
        {
            title: "Communication & Entrepreneurship Training",
            company: "Birla Institute, Jaipur",
            duration: "1 July 2024 – 30 July 2024",
            description: "Developed strong communication and interpersonal skills through presentations, group activities and collaborative projects. Learned the fundamentals of entrepreneurship, including idea generation, problem-solving, leadership, teamwork and basic business planning.",
            skills: ["Communication Skills", "Entrepreneurship", "Leadership"]
        }
    ];

    return (
        <div>
            <section id="internship">

                <div className="section-title">

                    <small>Experience</small>

                    <h2>My Internship Journey</h2>

                </div>

                <div className="timeline">

                    {internshipData.map((internship, index) => (
                        <Internship
                            key={index}
                            title={internship.title}
                            company={internship.company}
                            duration={internship.duration}
                            description={internship.description}
                            skills={internship.skills}
                        />
                    ))}


                </div>

            </section>


            <section id="internship">
                <div className="section-title">
                    <small>My Education</small>
                    <h2>Education & Qualification</h2>
                </div>
                <div className="timeline">
                    <School />
                </div>

            </section>



        </div>
    )
}

export default Education