import Nav from "../components/Nav/Nav";
import SubmitComponent from "../components/SubmitComponent/SubmitComponent";
import "./Upload.css";


function Upload() {
    return (
        <div>
            <div className="Upload">
            <Nav />
                <div className="button">
                    <SubmitComponent />
                </div>
            </div>
        </div>
    );
}

export default Upload;
