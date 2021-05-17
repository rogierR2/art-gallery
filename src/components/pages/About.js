import React from 'react';
import './About.css';

function About() {
    return (
        <div>
            <h1>About me</h1>
            <div className="text-container">
                <h2>Hi, my name is Rogier!</h2>
                <img src="images/profile.jpg" alt="Rogier profile picture" />
                <p>I am an IT-student who wants to learn more about front-end web development and design.</p>
                <p>I also like to draw!</p>
                <br />
                <p>Check out my Instagram page by clicking on the link below!</p>
            </div>
        </div>
    )
}

export default About;
