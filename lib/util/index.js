"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arrayContains;
function arrayContains(haystack, needle) {
  return haystack.indexOf(needle) > -1;
}