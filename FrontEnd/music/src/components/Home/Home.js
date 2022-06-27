import React from "react";
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="Home">
                <div className="TagLine">Find Your Genre </div>
                <div className="abstract">
                    <img src={require('../../Assets/abstract.jpeg')} alt="abstract" className="Image" />
                </div>
            </div>
        </div>
    );
}

export default Home;
