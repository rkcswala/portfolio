import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;

        const whatsappMessage = `Hello, I am ${name}. ${email} ${message}`;

        // Replace with your WhatsApp number
        const phoneNumber = "917372958422";

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            whatsappMessage
        )}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <section id="contact">

            <div className="section-title">
                <small>Contact</small>
                <h2>Let's Build Something Amazing</h2>
            </div>

            <div className="contact-container">

                <div className="contact-info">
                    <h3>Have a project?</h3>

                    <p>
                        Have an idea or need a developer?
                        Let's discuss your project and create
                        something awesome together.
                    </p>

                    <div className="contact-detail">
                        ✉ Rkcswala@gmail.com
                        <br />
                        ✉ ramkesh1532000@gmail.com
                    </div>

                    <div className="contact-detail">
                        📍 India
                    </div>
                </div>

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />



                    <textarea
                        name="message"
                        placeholder="Write Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="btn primary"
                    >
                        Send Message 🚀
                    </button>

                </form>

            </div>

        </section>
    );
};

export default Contact;