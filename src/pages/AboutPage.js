import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <div className="mt-6 text-gray-800 dark:text-white">
          <p>
            I am a Full Stack Web Development Graduate from HyperionDev,
            detail-oriented, organized and a problem solver.
          </p>

          <p>
            I am An avid follower of technology. These Days I am interested in
            learning to design, create and deploy and maintain minimalistic
            applications with a focus on the user experience.
          </p>
          <p>
            I want to be a dev at SovTech because of the company's commitment to
            helping businesses grow, by delivering world-class custom software
            and innovative cloud software to enterprise businesses and this
            experience will help me in my endeavour to hone my development and
            business skills.
          </p>
        </div>
        <a href="https://www.linkedin.com/in/bafana-mahamba-5858a3156/">
          <button type="button" className="btn btn-dark mr-2 active">
            Reach me
          </button>
        </a>
      </Content>
    </div>
  );
}

export default AboutPage;
