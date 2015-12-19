'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import connector from '../connector';

// @connector({
//   public: true
// })

var Accounts = (function () {
  function Accounts(stuff) {
    (0, _classCallCheck3.default)(this, Accounts);

    console.log('shit', stuff);
    // this[Symbol('oauth')] = this.constructor.oauth
    // console.log(this)
  }

  (0, _createClass3.default)(Accounts, [{
    key: 'create',
    value: function create() {
      console.log('create');
    }
  }, {
    key: 'read',
    value: function read() {
      // this.oauth.get(
      //   'https://api.twitter.com/1.1/trends/place.json?id=23424977',
      //   'your user token for this app',
      //   'your user secret for this app',
      //   function (err, data, res) {
      //     if (err) console.error(err);
      //     done();     
      //   }
      // );
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
  return Accounts;
})();

exports.default = new Accounts();