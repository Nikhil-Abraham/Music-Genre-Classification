import Nav from "../components/Nav/Nav";
import SubmitComponent from "../components/SubmitComponent/SubmitComponent";
import "../index.css";

function Upload() {
    return (
        <div>
            <Nav />
            <div className="Upload">
                <SubmitComponent />
            </div>
        </div>
    );
}

export default Upload;
