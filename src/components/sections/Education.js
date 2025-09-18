import React from "react";

function Education() {
  return (
    <section class="section" id="education">
      <div class="container">
        <h1 class="title">Education</h1>
        <div class="columns">



          <div class="column is-2">
            <figure class="image container is-128x128">
              <img src={'images/vt.jpg'} alt="Velayat University"/>
            </figure>
          </div>



          <div class="column is-4">
            <p class="heading">September 2014 - February 2020</p><p class="title is-4">BSc in Civil Engineering</p><p class="subtitle is-6">Velayat University</p><div class="content"><p class="title is-6">Courses</p><ul><li>Construction Materials</li><li>Computer Aided Design And Drafting</li><li>Computer Programming</li><li>Engineering Mechanics Statics</li><li>Mechanics Of Solids</li><li>Structural Analysis</li><li>Steel Structures</li><li>Reinforced Concrete Structures</li><li>Structural Design</li><li>Bachelor Thesis Project</li><li>...</li></ul></div>
          </div>


          <div class="column is-2">
            <figure class="image container is-96x96">
              <img src={'images/iau2.png'} alt="IAU"/>
            </figure>
          </div>



          <div class="column is-4">
            <p class="heading">September 2021 - present</p><p class="title is-4">MSc in Computer Engineering</p><p class="subtitle is-6">Islamic Azad University , South Tehran Branch</p><p class="subtitle is-6"><b>Major : Artificial Intelligence and Robotics</b></p><div class="content"><p class="title is-6">Courses</p><ul><li>Advanced Artificial Intelligence</li><li>Machine Learning</li><li>Digital Image Processing</li><li>Machine Vision</li><li>Neural Networks</li><li>Optimization</li><li>Digital Signal Processing</li><li>Stochastic Processes</li><li>MSc Thesis</li><li>...</li></ul></div>
          </div>
          

        </div>
      </div>
    </section>
  );
}

export default Education;
