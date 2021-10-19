import React from 'react'
import AboutImage from '../images/organic-about-1.png'

function About() {
    return (
        <div className="about">
            <div className="about-img">
                <img src={AboutImage} alt="img" />
            </div>

            <div className="about-text">
                <h3>Fresh Food,Simply <font>Delicious</font></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eaque eligendi totam, quis maiores esse quaerat temporibus labore nam atque! Quisquam itaque, soluta adipisci non eaque pariatur sequi repellat sunt ipsam ipsum deserunt veniam corrupti est porro beatae, quos eligendi fuga deleniti doloremque numquam. Magni.</p>
                <a href="/" className="about-btn">Read More</a>
            </div>
        </div>
    )
}

export default About
