const express = require("express");
const serverConfig = require("./configs/server.config");
const app = express();
const db = require("./models");

app.listen(serverConfig.PORT, () => {
  console.log("App listening at port, ", serverConfig.PORT);
});

//testing db connection
db.sequelize
  .sync({ force: true }) //sync{force:true}will remove all the recors everytime server started
  .then(() => {
    console.log("DB Connection succesful");
  })
  .catch((err) => {
    console.log("error message", err.message);
  });
