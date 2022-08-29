const express = require("express");
const cors = require("cors");
const { cnn } = require("./middlewares/algo");

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

  const Data = req.body.name;

  setTimeout(async () => {
    const genre = await cnn(Data);

    res.status(200).send(JSON.stringify(genre));
  }, 4000);
});

console.log(cnn);

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log(
    `[${new Date().toLocaleTimeString()}] Running on http://localhost:8080`
  );
});
