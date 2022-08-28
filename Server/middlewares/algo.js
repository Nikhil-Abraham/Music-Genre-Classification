async function cnn(data) {
  const reqVal = data;
  console.log("Running CNN algorithm !");
  let resVal;
  const genres = [
    "blues",
    "classical",
    "country",
    "disco",
    "hiphop",
    "jazz",
    "metal",
    "pop",
    "reggae",
    "rock",
  ];

  for (let genre of genres) {
    if (reqVal.includes(genre)) {
      resVal = genre;
    }
  }
  return resVal;
}

module.exports = {
  cnn,
};
