import React from "react";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Experience from "../sections/Experience";
import Articles from "../sections/Articles";

function Content() {
  return (
    <main>
      <AboutMe />
      <Education />
      <Skills />
      <Experience />
      <Articles />
    </main>
  );
}

export default Content;
