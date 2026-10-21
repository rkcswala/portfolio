import React from 'react'
import Button from './Button'

const Project = () => {
    return (
        <div>
            <section class="projects" id="projects">

                <div class="section-title">
                    <h2>Featured Projects</h2>
                </div>


                <div class="project-grid">

                    <div class="project-card">

                        <div class="project-image">
                            <img src="chatapp.png" alt="RealTime Chat App" />
                        </div>

                        <div class="project-content">

                            <h3>RealTime Chat App</h3>

                            <p>
                                A modern real-time chat application with user authentication,
                                message history and admin panel.
                            </p>

                            <div class="project-tags">
                                <span>React</span>
                                <span>Node.js</span>
                                <span>MongoDB</span>
                                <span>Socket.io</span>
                                <span>Express</span>
                            </div>
                            <div class="links">
                                <Button name="Views Project" link="https://chat-friendly.netlify.app/" />
                            </div>

                        </div>

                    </div>


                    <div class="project-card">

                        <div class="project-image">
                            <img src="newsportal.png" alt="News Portal" />
                        </div>

                        <div class="project-content">

                            <h3>News Portal</h3>

                            <p>
                                Full stack news platform with categories,
                                image uploads and admin management.
                            </p>

                            <div class="project-tags">
                                <span>Node.js</span>
                                <span>React</span>
                                <span>Express</span>
                                <span>MongoDB</span>
                            </div>
                            <div class="links">
                                <Button name="Views Project" />
                            </div>

                        </div>

                    </div>


                    <div class="project-card">

                        <div class="project-image">
                            <img src="taskmanagement.png" alt="Task Management" />
                        </div>

                        <div class="project-content">

                            <h3>Task Management</h3>

                            <p>
                                Productivity application for creating,
                                updating and tracking tasks.
                            </p>

                            <div class="project-tags">
                                <span>React</span>
                                <span>Node.js</span>
                                <span>REST API</span>
                                <span>Mongo DB</span>
                            </div>

                            <div class="links">
                                <Button name="Views Project" link="https://taskmanager15.netlify.app/" />
                            </div>

                        </div>

                    </div>

                    <div class="project-card">

                        <div class="project-image">
                            <img src="weather.png" alt="Task Management" />
                        </div>

                        <div class="project-content">

                            <h3>Weather App</h3>

                            <p>
                                A simple weather application that displays current conditions
                                and forecasts for a given location.
                            </p>

                            <div class="project-tags">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>API Integration</span>
                            </div>

                            <div class="links">
                                <Button name="Views Project" link="https://rkcswala.netlify.app/project/weather%20project/weather.html" />
                            </div>

                        </div>

                    </div>

                    <div class="project-card">

                        <div class="project-image">
                            <img src="cal.png" alt="Calculator App" />
                        </div>
                        <div class="project-content">

                            <h3>Calculator App</h3>

                            <p>
                                A simple calculator application for basic arithmetic operations.
                            </p>

                            <div class="project-tags">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>

                            </div>

                            <div class="links">
                                <Button name="Views Project" link="https://rkcswala.netlify.app/project/cal.html" />
                            </div>

                        </div>

                    </div>

                    <div class="project-card">

                        <div class="project-image">
                            <img src="watch.png" alt="Watch App" />
                        </div>
                        <div class="project-content">

                            <h3>Watch App</h3>

                            <p>
                                A simple watch application that displays the current time and date.
                            </p>

                            <div class="project-tags">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>

                            </div>

                            <div class="links">
                                <Button name="Views Project" link="https://rkcswala.netlify.app/project/clock/index.html" />
                            </div>

                        </div>

                    </div>


                </div>

            </section>

        </div>
    )
}

export default Project