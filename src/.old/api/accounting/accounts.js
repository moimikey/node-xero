// import connector from '../connector';

// @connector({
//   public: true
// })
class Accounts {
  constructor(stuff) {
    console.log('shit', stuff)
    // this[Symbol('oauth')] = this.constructor.oauth
    // console.log(this)
  }

  create() {
    console.log('create');
  }

  read() {
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

  update() {
    console.log('update');
  }

  delete() {
    console.log('delete');
  }
}

export default new Accounts;
