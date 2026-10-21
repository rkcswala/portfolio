import React from 'react'
import Button from './Button'
const Hero = () => {

    return (
        <div >
            <section class="hero" id="home">

                <div class="hero-content">

                    <div>

                        <span class="tag">
                            👋 Welcome to my portfolio
                        </span>

                        <h1>
                            I Build <span>Digital</span><br />
                            Experiences.
                        </h1>

                        <p>
                            I'm <span style={{ color: "red" }} >Ramkesh</span> Saini, a Full Stack Developer who transforms
                            ideas into beautiful, fast and scalable web applications.
                        </p>

                        <div class="buttons">

                            <Button name=" View My Work →" />
                            <Button name=" Let's Talk"/>

                        </div>

                    </div>


                    <div class="profile-card">

                        <div class="profile-circle">
                            <img src="/rrrr.jpeg" />
                        </div>

                        <div class="floating float1">
                            ⚡ Fast Developer
                        </div>

                        <div class="floating float2">
                            🚀 10+ Projects
                        </div>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default Hero