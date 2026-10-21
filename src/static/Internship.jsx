import React from 'react'

const Internship = ({ title, company, duration, description, skills }) => {
    return (
        <div>
            <div className="timeline-item">

                <div class="timeline-card">

                    <div className="experience-header">
                        <div>
                            <h3>{title}</h3>
                            <h4>{company}</h4>
                        </div>

                        <span className="experience-date"> {duration} </span>
                   
                    </div>

                    <p> {description} </p>
                     
                    <div className="experience-tags">
                        {skills.map((skill, index) => (
                            <span key={index} className="experience-tag">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Internship