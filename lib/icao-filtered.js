'use strict';

var icao = require('icao');

module.exports = Object.keys(icao).filter(function(k) {
  return k.charAt(0).toUpperCase() == 'K';
});
