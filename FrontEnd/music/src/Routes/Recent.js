import Nav from "../components/Nav/Nav";
import Genre from "../components/Genre/Genre";
import Tracks from "../components/Tracks/Tracks";
import "../index.css";
import "../App.css";
import "./Recent.css";

function Recent() {
    return (
        <div className="bg">
            <Nav />
        {/*    Search*/}
            <div className="Recent">
                <Genre />
                <Tracks />
            </div>
        {/*    Tracks*/}
        </div>
    );
}

export default Recent;
