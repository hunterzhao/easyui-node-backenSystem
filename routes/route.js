var express = require('express');
var index =require('./index');

module.exports = function(app){
    app.get('/', index.index);
};