'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _accounting = require('./accounting');

var _accounting2 = _interopRequireDefault(_accounting);

var _files = require('./files');

var _files2 = _interopRequireDefault(_files);

var _payroll = require('./payroll');

var _payroll2 = _interopRequireDefault(_payroll);

var API = {
  Accounting: _accounting2['default'],
  Files: _files2['default'],
  Payroll: _payroll2['default']
};

exports['default'] = API;
module.exports = exports['default'];