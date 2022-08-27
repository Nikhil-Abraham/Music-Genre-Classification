import axios from "axios";
import React, { useEffect, useState } from "react";

class SubmitComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      genre: "test",
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
      <div>
        <div onSubmit={this.onFormSubmit}>
          <input type="file" onChange={(e) => this.onChange(e)} />
        </div>
        <h1>{this.state.genre}</h1>
      </div>
    );
  }
}

export default SubmitComponent;
