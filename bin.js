#!/usr/bin/env node
"use strict";

// gives a cli interface to quickly
// stop / start
// - a back end server for ytb-wfe
// - a front end server for ytb-wfe

// to read command line options
var argv = require('yargs')
  .usage('Usage: $0 --config [file.json]')
  .demand(['config'])
  .argv;

// to read command line user input
var readline = require('readline');
var fs = require('fs');


var config_file = argv.config;

if( !fs.existsSync(config_file) ){
  console.warn("Configuration file does not exists "+config_file)
}else{
  var config = JSON.parse( fs.readFileSync(config_file) );

  var Frontend = require(config.fe.package);
  var Backend = require(config.be.package);

  var fe_options = config.fe;
  delete fe_options.package;

  var be_options = config.be;
  delete be_options.package;

// create a frontend app instance
  var feServer = new Frontend( fe_options );
// create a backend app instance
  var beServer = new Backend( be_options );

// read command line activity
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

// starts the fe server
  feServer.start(function(){
// starts the be server
    beServer.start(function(){
      // then wait for command line ur input to quit
      rl.question("Press enter to quit..", function(answer) {
        // free resources and quit
        beServer.stop(function(){
          feServer.stop(function(){
            rl.close();
            process.exit(1);
          });
        });
      });
    });
  });
}
