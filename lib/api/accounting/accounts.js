// import connector from '../connector';

// @connector({
//   public: true
// })
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Accounts = (function () {
  function Accounts(stuff) {
    _classCallCheck(this, Accounts);

    console.log('shit', stuff);
  }

  _createClass(Accounts, [{
    key: 'create',
    value: function create() {
      console.log('create');
    }
  }, {
    key: 'read',
    value: function read() {}
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

  return Accounts;
})();

exports['default'] = new Accounts();
module.exports = exports['default'];
// this[Symbol('oauth')] = this.constructor.oauth
// console.log(this)

// this.oauth.get(
//   'https://api.twitter.com/1.1/trends/place.json?id=23424977',
//   'your user token for this app',
//   'your user secret for this app',
//   function (err, data, res) {
//     if (err) console.error(err);
//     done();     
//   }
// );