import axios, { post } from 'axios';
import React from 'react';

class SubmitComponent extends React.Component {

    onChange(e) {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            console.log("Data:", e.target.result);
        }
    }

    render() {
        return (
            <div onSubmit={this.onFormSubmit}>
                <input type="file" onChange={(e) => this.onChange(e)} />
            </div>
        )
    }
}

export default SubmitComponent;
