const path = require("path");

module.exports = (app) => {
  app.get("/subscribe", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/subscribe.html"));
  });
  app.get("/subscribers", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/subscribers.html"));
  });
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
