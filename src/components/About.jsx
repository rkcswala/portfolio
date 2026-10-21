import React from 'react'
import Button from './Button'

const About = () => {
  return (
    <div>
         <section id="about">

        <div class="section-title">

            <small>About Me</small>

            <h2>Turning Ideas Into Reality</h2>

        </div>


        <div class="about-container">

            <div class="about-text">

                <p>
                    I'm a passionate Full Stack Developer focused on creating
                    modern, responsive and user-friendly web applications.
                </p>

                <p>
                    I love solving complex problems and building products that
                    combine great design with powerful technology.
                </p>


                <Button name="Hire Me" />

            </div>


            <div class="about-boxes">

                <div class="about-box">
                    <h3>1</h3>
                    <p>Years Experience</p>
                </div>

                <div class="about-box">
                    <h3>10+</h3>
                    <p>Projects Completed</p>
                </div>

                <div class="about-box">
                    <h3>15+</h3>
                    <p>Technologies</p>
                </div>


            </div>



        </div>

    </section>
    </div>
  )
}

export default About