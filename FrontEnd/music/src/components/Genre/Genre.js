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
                        <audio controls>	
                              <source src={require('../../Assets/rock.mp3')} type="audio/mpeg"></source>
                         </audio>
                </div>
                <div className="ListItem">
                    <img src={require('../../Assets/Jazz.jpeg')} alt="abstract" className="ListImage" />
                    <div className="ListItemTitle">Jazz</div>
                         <audio controls>	
                              <source src={require('../../Assets/jazz.mp3')} type="audio/mpeg"></source>
                         </audio>
                </div>
                <div className="ListItem">
                    <img src={require('../../Assets/Pop.jpeg')} alt="abstract" className="ListImage" />
                    <div className="ListItemTitle">Pop</div>
                    <audio controls>	
                              <source src={require('../../Assets/pop.mp3')} type="audio/mpeg"></source>
                         </audio>
                </div>
                <div className="ListItem">
                    <img src={require('../../Assets/Country.jpeg')} alt="abstract" className="ListImage" />
                    <div className="ListItemTitle">Country</div>
                    <audio controls>	
                              <source src={require('../../Assets/country.mp3')} type="audio/mpeg"></source>
                         </audio>
                </div>
                <div className="ListItem">
                    <img src={require('../../Assets/EDM.jpeg')} alt="abstract" className="ListImage" />
                    <div className="ListItemTitle">Metal</div>
                    <audio controls>	
                              <source src={require('../../Assets/metal.mp3')} type="audio/mpeg"></source>
                         </audio>
                </div>
            </div>
        </div>
    );
}

export default Genre;
