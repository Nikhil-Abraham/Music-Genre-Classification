import axios from "axios";
import React from "react";

class SubmitComponent extends React.Component {
  onChange(e) {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = async (e) => {
      console.log(files[0].name);

      console.log(JSON.stringify(files[0].name));
      let headers = new Headers();
      headers.set("Content-type", "application/json");

      // return fetch("http://localhost:8080/api/upload", {
      //   method: "POST",
      //   body: files[0].name,
      //   headers,
      // }).then((res) => {
      //   console.log(res);
      // });

      const Response = await fetch("http://localhost:8080/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: files[0].name,
        }),
      });
    };
  }

  render() {
    return (
      <div onSubmit={this.onFormSubmit}>
        <input type="file" onChange={(e) => this.onChange(e)} />
      </div>
    );
  }
}

export default SubmitComponent;
