var bunyan = require("bunyan");

var request = require("../utils/request");
var cfg = require("../config");
var log = bunyan.createLogger({ name: "users" });

/*
  Refactorizacion

  'GET     /user/:id', getUserById
  'GET     /user/name/:name', getUserByName
  
  las dos funciones se pueden refactorizar y crear una sola funcion
  Utilizamos una expresion regular en el endpoint /user/:%(id or name) para enviar como parametro id o name
  si el id es numerico, entonces buscamos por id
  si el name es string, entonces buscamos por name

  Resultado

  'GET     /user/:(id|name)', getUserByIdOrName

*/

var getUserById = function(req, res, next) {
  if (["admin", "user"].indexOf(req.userRole) < 0)
    return res.send({ message: "You do not have permission" });
  var resource = request.options(cfg.resources.host, cfg.resources.clients);
  request.req(resource, (status, result) => {
    var _id = req.params.id;
    var client = result["clients"].find(c => c.id === _id);
    res.send(200, client || {});
  });
  next();
};

var getUserByName = function(req, res, next) {
  console.log(req.userRole);
  if (["admin", "user"].indexOf(req.userRole) < 0)
    return res.send({ message: "You do not have permission" });
  var resource = request.options(cfg.resources.host, cfg.resources.clients);
  request.req(resource, (status, result) => {
    var name = req.params.name;
    var client = result["clients"].find(
      c => c.name.toLowerCase() === name.toLowerCase()
    );
    res.send(200, client || {});
  });
  next();
};

module.exports.getUserById = getUserById;
module.exports.getUserByName = getUserByName;
