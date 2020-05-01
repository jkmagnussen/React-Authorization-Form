import React from "react";

import github from "../media/github.png";
import linkedIn from "../media/linkedIn.png";
import home from "../media/home.png";

class Footer extends React.Component {
  logos = [
    {
      className: "home",
      src: home,
      alt: "home",
      link: "https://jkmagnussen.com/",
    },
    {
      className: "linkedIn",
      src: linkedIn,
      alt: "linkedin",
      link: "https://linkedin.com/in/joseph-magnussen/",
    },
    {
      className: "github",
      src: github,
      alt: "github",
      link: "https://github.com/jkmagnussen/React-Authorization-Form",
    },
  ];

  render() {
    const X = this.logos.map((item) => {
      return (
        <a href={item.link}>
          <img
            className={item.className}
            src={item.src}
            alt={item.alt}
            style={{
              width: 58,
              height: 58,
              padding: 20,
            }}
          />
        </a>
      );
    });

    return <div className="footer">{X}</div>;
  }
}

export default Footer;
