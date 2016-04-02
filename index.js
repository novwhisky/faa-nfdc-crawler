'use strict';

var fs = require('fs');
var util = require('util');

var icao = require('./lib/icao-filtered');
var AirportDataStream = require('./lib/nfdc/AirportDataResultParser');

var apStrm = fs.createReadStream('out.html');
var airportData = new AirportDataStream();

apStrm.on('open', function() {
  apStrm.pipe(airportData);
});