var express = require("express");
const router = express.Router();

var Schema = require("./schema.js");

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














router.use(
  "/",
  (req, res, next) => {


    // res.send("Sqltest3");



    res.header("Access-Control-Allow-Credentials", true);

    res.header(
      "Access-Control-Allow-Headers",
      "content-type, authorization, content-length, x-requested-with, accept, origin"
    );
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    res.header("Allow", "POST, GET, OPTIONS");
    res.header("Access-Control-Allow-Origin", "*");

    if (req.method === "OPTIONS") {
      res.sendStatus(200);

    } else {
      next();
    }

  },



  // graphqlHTTP({
  //  schema: Schema.Schema,
  //  pretty: true,
  //  rootValue: Schema.root,
  //  graphiql: true
  // })
  
  
  
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })





  
);

module.exports = router;