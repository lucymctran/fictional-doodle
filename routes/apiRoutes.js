const topSubscribers = require("../data/topSubscribers");
const otherSubscribers = require("../data/otherSubscribers");
const path = require("path");

module.exports = (app) => {
  //app.post newSubscriber info
  app.post("/toplist", (req, res) => {
    if (topSubscribers.length < 5) {
      topSubscribers.push(req.body);
      res.json(true);
    } else {
      otherSubscribers.push(req.body);
    }
  });
  //app.get topSubscriber data
  app.get("/toplist", (req, res) => {
    res.send(topSubscribers);
  });
  //app.get otherSubscriber data
};
