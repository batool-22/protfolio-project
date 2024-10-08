import React, { useState, useEffect } from "react";
import "./style-switcher.css";
const StyleSwitcher = (props) => {
  const { theme, setTheme } = props;
  const [currentColor, setCurrentColor] = useState("green");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll(".alternate-style");

    links.forEach((link) => {
      if (link.getAttribute("title") === currentColor) {
        link.removeAttribute("disabled");
      } else {
        link.setAttribute("disabled", "true");
      }
    });
  }, [currentColor]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleStyleSwitcher = () => {
    console.log("Before toggle:", isOpen);
    setIsOpen(!isOpen);
    console.log("After toggle:", !isOpen);
  };
  const handleColorChange = (color) => {
    console.log("color", color);
    setCurrentColor(color);
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <>
      <div className={`style-switcher ${isOpen ? "open" : ""}`}>
        <div className="toggle-style-switcher" onClick={toggleStyleSwitcher}>
          <i className="fa fa-cog fa-spin"></i>
        </div>
        <h5>Style Switcher</h5>
        <ul>
          <li>
            <a
              href="#"
              title="pink"
              style={{ background: "#ec1839" }}
              onClick={() => handleColorChange("pink")}
            ></a>
          </li>
          <li>
            <a
              href="#"
              title="blue"
              style={{ background: "#2196f3" }}
              onClick={() => handleColorChange("blue")}
            ></a>
          </li>
          <li>
            <a
              href="#"
              title="orange"
              style={{ background: "#fa5b0f" }}
              onClick={() => handleColorChange("orange")}
            ></a>
          </li>
          <li>
            <a
              href="#"
              title="yellow"
              style={{ background: "#ffb400" }}
              onClick={() => handleColorChange("yellow")}
            ></a>
          </li>
          <li>
            <a
              href="#"
              title="green"
              style={{ background: "#72b626" }}
              onClick={() => handleColorChange("green")}
            ></a>
          </li>
        </ul>
        <h5>Body Skin</h5>
        <label className="switcher-light">
          <input
            type="radio"
            class="body-skin"
            name="body-style"
            value="light"
            checked={theme === "light"}
            onChange={handleThemeChange}
          />
          Light
        </label>

        <label className="switcher-light">
          <input
            type="radio"
            class="body-skin switcher-light"
            name="body-style"
            value="dark"
            checked={theme === "dark"}
            onChange={handleThemeChange}
          />
          Dark
        </label>
      </div>
    </>
  );
};

export default StyleSwitcher;
