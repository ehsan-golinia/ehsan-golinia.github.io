import React from "react";
import SkillsList from "../elements/SkillsList";
import Resume from "../../resume.json";

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 1
      }}
  />
);
function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h1 className="title">Skills</h1>
        <div className="columns">


          <div className="column is-4 mb-6">
            <div className="has-text-centered">
              <span className="icon has-text-link">
                <i className="fas fa-3x fa-file-code"></i>
              </span>
              <h2 className="title is-5">Machine Learning</h2>
            </div>
            <SkillsList
              skills={Resume.skills
                .filter(skill => skill.keywords.includes("ML"))
                .reduce((obj, item) => {
                  obj[item.name] = item.level;
                  return obj;
                }, {})}
            />
          </div>












          <div className="column is-4 mb-6">
            <div className="has-text-centered">
              <span className="icon has-text-link">
                <i className="fas fa-3x fa-brain"></i>
              </span>
              <h2 className="title is-5">Deep Learning</h2>
            </div>
            <SkillsList
              skills={Resume.skills
                .filter(skill => skill.keywords.includes("DL"))
                .reduce((obj, item) => {
                  obj[item.name] = item.level;
                  return obj;
                }, {})}
            />
          </div>



          <div className="column is-4 mb-6">
            <div className="has-text-centered">
              <span className="icon has-text-link">
                <i className="fas fa-3x fa-low-vision"></i>
              </span>
              <h2 className="title is-5">Computer Vision</h2>
            </div>
            <SkillsList
              skills={Resume.skills
                .filter(skill => skill.keywords.includes("CV"))
                .reduce((obj, item) => {
                  obj[item.name] = item.level;
                  return obj;
                }, {})}
            />
          </div>








        </div>
        <ColoredLine color="#A9A9A9" />
        <br></br>
        <div className="columns">
          <div className="column is-4 mb-6">
            <div className="has-text-centered">
              <span className="icon has-text-link">
                <i className="fas fa-3x fa-laptop-code"></i>
              </span>
              <h2 className="title is-5">Programming Languages</h2>
            </div>
            <SkillsList
              skills={Resume.skills
                .filter(skill => skill.keywords.includes("Programming Languages"))
                .reduce((obj, item) => {
                  obj[item.name] = item.level;
                  return obj;
                }, {})}
            />
          </div>


          <div className="column is-4 mb-6">
            <div className="has-text-centered">
              <span className="icon has-text-link">
                <i className="fas fa-3x fa-box"></i>
              </span>
              <h2 className="title is-5">Packages</h2>
            </div>
            <SkillsList
              skills={Resume.skills
                .filter(skill => skill.keywords.includes("Packages"))
                .reduce((obj, item) => {
                  obj[item.name] = item.level;
                  return obj;
                }, {})}
            />
          </div>












          <div className="column is-4 mb-6">
            <div className="has-text-centered">
              <span className="icon has-text-link">
                <i className="fas fa-3x fa-briefcase"></i>
              </span>
              <h2 className="title is-5">Software Development Tools</h2>
            </div>
            <SkillsList
              skills={Resume.skills
                .filter(skill => skill.keywords.includes("Software Developer"))
                .reduce((obj, item) => {
                  obj[item.name] = item.level;
                  return obj;
                }, {})}
            />
          </div>
        </div>
        {/* <ColoredLine color="#A9A9A9" /> */}
        <br></br>
      </div>
    </section>
  );
}

export default Skills;
