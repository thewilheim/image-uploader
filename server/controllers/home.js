const path = require("path");

const home = (req, res) => {
  return res.send("Hello World");
};

module.exports = {
  getHome: home,
};
