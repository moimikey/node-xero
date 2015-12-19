"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var lastInSet = exports.lastInSet = function lastInSet(set) {
  return [].concat(_toConsumableArray(set.keys()))[[].concat(_toConsumableArray(set.keys())).length - 1];
};
var getTimestamp = exports.getTimestamp = function getTimestamp() {
  return Math.floor(new Date().getTime() / 1000);
};
var CACHE = exports.CACHE = new Map();
var MAXAGE = exports.MAXAGE = new Set();
var AGE = exports.AGE = new Set();
var TIMEOUT = exports.TIMEOUT = 30 * 60;