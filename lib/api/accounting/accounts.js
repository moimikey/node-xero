'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _connector = require('../connector');

var Accounts = (function () {
  function Accounts() {
    _classCallCheck(this, _Accounts);

    _extends(this, Accounts.Connector);
  }

  var _Accounts = Accounts;

  _createClass(_Accounts, [{
    key: 'create',
    value: function create() {
      console.log('create');
    }
  }, {
    key: 'read',
    value: function read() {
      console.log('read');
    }
  }, {
    key: 'update',
    value: function update() {
      console.log('update');
    }
  }, {
    key: 'delete',
    value: function _delete() {
      console.log('delete');
    }
  }]);

  Accounts = (0, _connector.connector)({
    'public': true,
    'private': true,
    partner: false
  })(Accounts) || Accounts;
  return Accounts;
})();

exports['default'] = Accounts;
module.exports = exports['default'];