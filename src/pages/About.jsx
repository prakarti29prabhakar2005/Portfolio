import React from "react";
import me from "../assets/me.jpg";
import { FiGithub } from "react-icons/fi";

const About = () => {
  return (
    <>
      <div id="about" className="about">
        <h2 className="about-heading">
          About <span className="name">Me</span>
        </h2>
        <div className="about-content">
          <section className="about-left">
            <div className="about-text">
              <div className="img-wrapper">
                <img src={me} alt="Prakarti" className="me-img" />
              </div>
              <p>
                Hey! I'm Prakarti — a full stack web developer who loves
                creating clean, user-focused websites and web apps. I'm all
                about writing reliable code, solving real problems, and having
                fun with it along the way.
              </p>
              <div className="explore-more">
                <div className="git-circle">
                  <FiGithub
                    onClick={() => {
                      window.open(
                        "https://github.com/prakarti29prabhakar2005",
                        "_blank"
                      );
                    }}
                  />
                </div>
                <div
                  className="download-cv"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1bs4mNk4PSfP6SXViHQGA3LrLZ4KZiSp-/view?usp=sharing",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  <span>Download CV</span>
                </div>
              </div>
            </div>
          </section>
          <section className="about-right">
            <div className="tech-stack">
              <h3 className="tech-stack-heading">Digital Superpowers I Use</h3>
              <div className="row1">
                <span className="tech-name">Java</span>
                <span className="tech-name">Git & GitHub</span>
              </div>
              <div className="row2">
                <span className="tech-name">JavaScript</span>
                <span className="tech-name">TypeScript</span>
                <span className="tech-name">HTML</span>
              </div>
              <div className="row3">
                <span className="tech-name">CSS</span>
                <span className="tech-name">Tailwind</span>
                <span className="tech-name">Bootstrap</span>
              </div>
              <div className="row4">
                <span className="tech-name">React.js</span>
                <span className="tech-name">Node.js</span>
                <span className="tech-name">Express.js</span>
              </div>
              <div className="row5">
                <span className="tech-name">MongoDB</span>
                <span className="tech-name">MySQL</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
