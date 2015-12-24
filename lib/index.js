'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xero = Xero;

var _core = require('./core');

var core = _interopRequireWildcard(_core);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Xero(config) {
  return Object.assign(Object.create(null), config, core);
}