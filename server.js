const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const posts = require("./backend/routes/posts");

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.MONGO_ATLAS_USER +
      ":" +
      process.env.MONGO_ATLAS_PW +
      "@node-rest-api-aulzl.mongodb.net/ng-cms-w?retryWrites=true",
    {
      useNewUrlParser: true
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Couldn't connect to MongoDB"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/posts", posts);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
