import React from "react";
import "./About.css";

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                This page is for practicing React.
            </span>
            <span>2021/05/28</span>
        </div>
    );
}

export default About;