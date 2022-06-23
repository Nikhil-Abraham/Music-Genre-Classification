import react from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="title">TuneFind</div>
        <div className="nav_menu">
          <div className="nav_item">About</div>
          <div className="nav_item">Team</div>
          <div className="nav_item">Contribute</div>
        </div>
      </div>
      <div className="body">
        <div className="logo_img">
          <a href="">
            <img
              src={require("../../Assets/img.png")}
              alt="mic logo"
              with="100"
              height="100"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
