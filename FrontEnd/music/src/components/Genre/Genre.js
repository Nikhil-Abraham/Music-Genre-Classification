import React from "react";

import "./Genre.css";

const Genre = () => {
    return (
        <div className="genre_bg">
            <div className="Heading">Popular Genre's</div>
            <div className="List">
                <div className="ListItem">
                        <img src={require('../../Assets/Rock.jpeg')} alt="abstract" className="ListImage" />
                        <div className="ListItemTitle">Rock</div>
                </div>
                <div className="ListItem">
                    <img src={require('../../Assets/Jazz.jpeg')} alt="abstract" className="ListImage" />
                    <div className="ListItemTitle">Jazz</div>
                </div>
                <div className="ListItem">
                    <img src={require('../../Assets/Pop.jpeg')} alt="abstract" className="ListImage" />
                    <div className="ListItemTitle">Pop</div>
                </div>
                <div className="ListItem">
                    <img src={require('../../Assets/Country.jpeg')} alt="abstract" className="ListImage" />
                    <div className="ListItemTitle">Country</div>
                </div>
                <div className="ListItem">
                    <img src={require('../../Assets/EDM.jpeg')} alt="abstract" className="ListImage" />
                    <div className="ListItemTitle">EDM</div>
                </div>
            </div>
        </div>
    );
}

export default Genre;
