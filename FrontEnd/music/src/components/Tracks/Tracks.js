import React from "react";

import "./Tracks.css";

const Tracks = () => {
  return (
    <div className="genre_bg">
      <div className="List">
                <div className="ListItem">
                        <img src={require('../../Assets/blues.jpg')} alt="abstract" className="ListImage" />
                        <div className="ListItemTitle">Blues</div>
                        <audio controls>	
                              <source src={require('../../Assets/blues.mp3')} type="audio/mpeg"></source>
                         </audio>
                </div>
                <div className="ListItem">
                    <img src={require('../../Assets/classical.jpg')} alt="abstract" className="ListImage" />
                    <div className="ListItemTitle">Classical</div>
                    <audio controls>	
                              <source src={require('../../Assets/classical.mp3')} type="audio/mpeg"></source>
                         </audio>
                </div>
                <div className="ListItem">
                    <img src={require('../../Assets/disco.jpg')} alt="abstract" className="ListImage" />
                    <div className="ListItemTitle">Disco</div>
                    <audio controls>	
                              <source src={require('../../Assets/disco.mp3')} type="audio/mpeg"></source>
                         </audio>
                </div>
                <div className="ListItem">
                    <img src={require('../../Assets/hiphop.jpg')} alt="abstract" className="ListImage" />
                    <div className="ListItemTitle">Hiphop</div>
                    <audio controls>	
                              <source src={require('../../Assets/hiphop.mp3')} type="audio/mpeg"></source>
                         </audio>
                </div>
                <div className="ListItem">
                    <img src={require('../../Assets/raggae.jpg')} alt="abstract" className="ListImage" />
                    <div className="ListItemTitle">Raggae</div>
                    <audio controls>	
                              <source src={require('../../Assets/raggae.mp3')} type="audio/mpeg"></source>
                         </audio>
                </div>
            </div>
    </div>
  );
};

export default Tracks;
