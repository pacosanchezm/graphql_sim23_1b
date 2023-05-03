var http = require("http");

const express = require("express");
const app = express();

const publicIp = require("public-ip");

app.get("/", (req, res) => {
  res.send("Servidor GraphQL Iniciado");
});

var gql = require("./routegql");
app.use("/gql", gql);

app.listen(8080, () => {
  console.log("Node apps es running on port: 8080");

  (async () => {
    console.log(await publicIp.v4());
  })();
});

//create a server object:
// http
//   .createServer(function (req, res) {
//    res.write("Hello World!"); //write a response to the client
//    res.end(); //end the response
//  })
//  .listen(8080); //the server object listens on port 8080
