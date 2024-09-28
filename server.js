const { app } = require("./app");
const http = require("http");
const {port}= require ("./config/env")
const server = http.createServer(app);


server.listen(port|| 3000, () => {
  console.log("SERVER RUNNING");
});
