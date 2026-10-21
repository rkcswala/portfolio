import React from 'react'

const Servicecard = () => {
    const servicesData = [
        {
            title: "Web Development",
            icon: "💻",
            description: "Modern and responsive websites built with clean and maintainable code."
        },
        {
            title: "React Development",
            icon: "⚛️",
            description: "Interactive single-page applications using React and modern frontend technologies."
        },
        {
            title: "Backend Development",
            icon: "🔧",
            description: "Secure REST APIs and scalable backend applications using Node.js and Express."
        },
        {
            title: "RESTful API Creation & Operations",
            icon: "🔗",
            description: "Design and develop RESTful APIs with complete CRUD operations, authentication, database integration, validation, error handling, API testing and deployment using Node.js, Express.js and MongoDB."
        },
        {
            title: "Web & API Deployment",
            icon: "🚀",
            description: "Deploy and configure web applications and RESTful APIs for production environments with proper environment variables, database connectivity, server configuration and deployment management."
        }
    ];
    return (
        <div>

            <div class="services-grid">

                {servicesData.map((service, index) => (
                    <div className="service" key={index}>

                        <div className="service-icon"> {service.icon} </div>

                        <h3> {service.title} </h3>
                        <p> {service.description} </p>
                    </div>

                ))}

            </div>


        </div>
    )
}

export default Servicecard