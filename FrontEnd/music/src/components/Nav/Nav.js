import React from "react";
import { ImHome } from "react-icons/im";
import { ImMusic } from "react-icons/im";
import { ImMic } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <div className="NavMenu">
        <Link to="/">
          <ImHome size="35px" />
        </Link>
        <Link to="/recent">
          <ImMusic size="35px" />
        </Link>
        <Link to="/upload">
          <ImMic size="35px" />
        </Link>
        <a
          href="https://github.com/Nikhil-Abraham/Music-Genre-Classification"
          target="_blank"
        >
          <ImGithub size="35px" />
        </a>
      </div>
    </div>
  );
};

export default Nav;
