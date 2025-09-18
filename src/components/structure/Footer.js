import React from "react";

function Footer() {
  return (
    <footer className="footer has-background-link">
      <div className="content has-text-centered has-text-white">
        <p>
        Built by {" "}
          <a href="https://github.com/jcoelho93" className="has-text-white">
            <strong>José Coelho</strong>
          </a>
        </p>
        <p>
        Customized By {" "}
          <a href="https://www.linkedin.com/in/ehsangolinia" className="has-text-white">
            <strong>Ehsan Golinia</strong>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
