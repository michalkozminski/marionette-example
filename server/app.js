'use strict';

var express = require('express');
var http = require('http');
var path = require('path');

// init express
var app = express();


// set logging
app.use(function(req, res, next){
    console.log('%s %s', req.method, req.url);
    next();
});

// mount static
app.use(express.static( path.join( __dirname, '../') ));

// route index.html
app.get('/', function(req, res){
    res.sendfile( path.join( __dirname, '../index.html' ) );
});

// start server
app.listen(3000);
console.log('Visit app at: http://localhost:3000/#list');

