import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../index.css";
import "./Submit.css";

class SubmitComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      genre: "",
    };

    this.onChange = this.onChange.bind(this);
  }
  // use state to store the value of the input

  onChange(e) {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = async (e) => {
      console.log(files[0].name);

      console.log(JSON.stringify(files[0].name));
      let headers = new Headers();
      headers.set("Content-type", "application/json");

      const Response = await (
        await fetch("http://localhost:8080/api/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: files[0].name,
          }),
        })
      ).json();

      this.setState({
        genre: Response,
      });
    };
  }

  render() {
    return (
      /*<div className="abs">
      <img src={require('../../Assets/abstract.jpeg')} alt="abstract" className="Image" />
      </div>*/
      <div className="Submit">
        <div className="but-area">
          <div onSubmit={this.onFormSubmit}>
            <div className="chosefile">
              <p>
                <label>
                  <input
                    type="file"
                    hidden
                    onChange={(e) => this.onChange(e)}
                  />
                  upload
                </label>
              </p>
            </div>
          </div>
        </div>
        <div className="fart">
          <img
            src={require("../../Assets/abstract.jpeg")}
            alt="abstract"
            className="Image"
          />
          <div className="jatre">{this.state.genre}</div>
        </div>
      </div>
    );
  }
}

export default SubmitComponent;
