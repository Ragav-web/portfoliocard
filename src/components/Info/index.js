import "./style.css"

import React from "react"

export default function Info() {
    return (
        <div>
            <img className="profile-photo" src="../images/profile.jpg" />
            <h1 className="person-name">Santha Soruban</h1>
            <h3 className="profission">Junior Front-End Developer</h3>
            {/* <h4 className="site">your website here</h4> */}
            <div className="websites">
                <a href="mailto:sragav2201@gmail.com" target="_blank" className="email">
                    <img src="../images/email-logo.png" />
                    <p>Email</p> 
                </a>
                <a href="https://www.linkedin.com/in/santha-soruban-s-3567aa213/" target="_blank" className="linkedin" >
                    <img src="../images/linkedin-logo.png" />
                    <p>Linkedin</p>            
                </a>
            </div>
        </div>
    )
}