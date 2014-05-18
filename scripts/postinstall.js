#!/usr/bin/env node

var fs = require("fs");

if( fs.existsSync("config.json") == false ){
  var content = fs.readFileSync(__dirname+"/../dist/config.json");
  fs.writeFileSync("config.json", content);
}
