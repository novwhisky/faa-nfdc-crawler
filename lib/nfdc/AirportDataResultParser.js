var Parser = require('htmlparser2').Parser;
var stream = require('stream');
var Duplex = stream.Duplex;
var util = require('util');


// Parse options https://github.com/fb55/htmlparser2/wiki/Parser-options
var parse = new Parser({
    onopentag: function(name, attribs) {
      if(name === "a") {
        console.log(attribs);
      }
    },
    ontext: function(text) {

    },
    onclosetag: function(tagname){

    }
  }, {decodeEntities: true});





module.exports = AirportData;

function AirportData(options) {
  if(!this instanceof AirportData)
    return new AirportData(options);

  Duplex.call(this, options);
}

util.inherits(AirportData, Duplex);


AirportData.prototype._read = function readBytes(n) {
  console.log(n);
};

AirportData.prototype._write = function(chunk, enc, cb) {
  parse.write(chunk);
  cb();
};