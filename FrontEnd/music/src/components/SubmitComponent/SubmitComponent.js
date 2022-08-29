import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "../../index.css";
import "./Submit.css";

class SubmitComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      genre: "",
      isLoading: false,
    };

    this.onChange = this.onChange.bind(this);
  }
  // use state to store the value of the input

  onChange(e) {
    this.setState({
      isLoading: true,
    });

    this.state.isLoading = true;
    this.state.genre = "loading ...";

    let files = e.target.files;

    let reader = new FileReader();

    reader.readAsDataURL(files[0]);

    reader.onload = async (e) => {
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
        isLoading: false,
      });
    };
  }

  render() {
    return (
      /*<div className="abs">
      <img src={require('../../Assets/abstract.jpeg')} alt="abstract" className="Image" />
      </div>*/
      <div className="Submit">
        <div className="descArea">
          <div className="uploadDesc">
            <div className="text">
              Upload audio file in .wav format to find the genre.
            </div>
          </div>
        </div>
        <div className="buttonRow">
          <div>
            {this.state.isLoading ? (
              <LoadingSpinner />
            ) : (
              <div className="but-area">
                <div onSubmit={this.onFormSubmit}>
                  <div className="btn-grad">
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
            )}
          </div>

          <div className="Data">
            <div className="jatre">{this.state.genre}</div>
          </div>
        </div>

        <div className="fart">
          <img
            src={require("../../Assets/upload.png")}
            alt="upload"
            className="upload"
          />
        </div>
      </div>
    );
  }
}

export default SubmitComponent;
