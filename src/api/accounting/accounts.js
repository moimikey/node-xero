import { connector } from '../connector';

@connector({
  public:  true,
  private: true,
  partner: false
})
class Accounts {
  constructor() {
    Object.assign(this, Accounts.connector);
  }

  create() {
    console.log('create');
  }

  read() {
    console.log('read');
  }

  update() {
    console.log('update');
  }

  delete() {
    console.log('delete');
  }
}

export default Accounts;
