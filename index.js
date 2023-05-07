var http = require("http");

const express = require("express");
const app = express();

 const publicIp = require("public-ip");



 var graphqlHTTP = require("express-graphql");
 var { buildSchema } = require("graphql")


// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!"
  },
}







app.get("/", (req, res) => {
  res.send("Servidor GraphQL Iniciado3");
});

// var gql = require("./routegql");
// app.use("/gql", gql);






app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)













app.listen(8080, () => {
  console.log("Node apps es running on port: 8080");

  (async () => {
    console.log(await publicIp.v4());
   
  // console.log(await publicIp());
   
   
   
  })();
});

//create a server object:
// http
//   .createServer(function (req, res) {
//    res.write("Hello World!"); //write a response to the client
//    res.end(); //end the response
//  })
//  .listen(8080); //the server object listens on port 8080
