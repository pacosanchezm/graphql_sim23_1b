var { buildSchema } = require("graphql");

 let hello = require("./db/hello");




// var hello = () => {
//     return "Hello world!"
//   }





exports.Schema = buildSchema(`


type hello {
    Consultas: helloConsultas
  }

    type helloConsultas {
      Base(Query: String): String


    }



type Query {

    Hello: hello


}


`);


exports.root = {

    Hello: () => new hello() 



};