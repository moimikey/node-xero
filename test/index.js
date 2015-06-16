var expect = require('chai').expect;

describe('first test', function() {
  it('', function() {
    var Xero = require('../')();
    var Accounting = Xero.Accounting;
    var Files = Xero.Files;
    var Payroll = Xero.Payroll;
    expect(Xero).to.be.an('object')
    expect(Accounting).to.be.an('object')
    expect(Files).to.be.an('object')
    expect(Payroll).to.be.an('object')
  })
})
