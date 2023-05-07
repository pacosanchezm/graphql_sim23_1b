



let mifunction = function() {
    return {
      Consultas: function() {
        return {
          Base: function(q) {
            let e = q.Query ? q.Query : q;
  
            try {

  
              return "so hello"
            } catch (e) {console.error(e)}
          },
  
        };
      }, // ------- Consultas
  
    };
  };
  
  module.exports = mifunction;