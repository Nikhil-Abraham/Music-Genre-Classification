const express = require("express");
const cors = require("cors");

const app = express();
const bodyParser = require("body-parser");

// create application/json parser
const jsonParser = bodyParser.json();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.post("/api/upload", jsonParser, async function (req, res) {
  // console.log(`Recived request: ${req.body}`);
  const reqVal = req.body.name;
  console.log(reqVal);
  res.send("Hello World!");
});

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log(
    `[${new Date().toLocaleTimeString()}] Running on http://localhost:8080`
  );
});
