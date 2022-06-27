import React from 'react';
import { ImHome } from "react-icons/im";
import { ImMusic } from "react-icons/im";
import { ImMic } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import './Nav.css';


const Nav = () => {
    return(
        <div>
            <div className="NavMenu">
                <a href=""><ImHome size="35px"/></a>
                <a href=""><ImMusic size="35px"/></a>
                <a href=""><ImMic size="35px"/></a>
                <a href=""><ImGithub size="35px"/></a>
            </div>
        </div>

    )
}

export default Nav
