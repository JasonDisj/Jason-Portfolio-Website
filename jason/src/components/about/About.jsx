import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.png";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I'm a Full-Stack Developer based in Vancouver, Canada. I offer
              both development services of web applications or websites. I'm
              always up for new challenges and exploring other technologies and
              frameworks that catch my interest.<br></br>
              <br></br>I like to code things from scratch, and enjoy bringing
              ideas to life in the browser. If you're looking for a developer to
              add to your team, please don't hesitate to contact me.
            </p>
            <a
              href="Jason's Resume.pdf"
              download="Jason's Resume.pdf"
              className="btn"
            >
              Download Resume
            </a>
          </div>
          {/* <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
