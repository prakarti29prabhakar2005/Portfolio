import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    const classes = ["color-1", "color-2", "color-3", "color-4", "color-5"];
    for (let i = 0; i < width; i += 20) {
      for (let j = 0; j < height; j += 20) {
        const outerDiv = document.createElement("div");
        outerDiv.classList.add("box");
        const innerDiv = document.createElement("div");
        innerDiv.classList.add("dot");

        let random = Math.floor(Math.random() * 5);
        innerDiv.classList.add(classes[random]);
        outerDiv.appendChild(innerDiv);
        canvas.appendChild(outerDiv);
      }
    }
  }, []);
  return (
    <div id="canvas-wrapper">
      <div id="canvas"></div>
      <div className="intro">
        <div className="name-sentence">
          Hello, I'm <span className="name">Prakarti</span>.
        </div>
        <div className="profession-sentence">
          I'm a full stack web developer.
        </div>
        <div
          className="redirect-about"
          onClick={() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <span>Get to Know Me </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
