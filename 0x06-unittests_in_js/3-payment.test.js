const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should utilize the calculateNumber method from Utils correctly', () => {
    const utilsSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);
    expect(utilsSpy.calledWith('SUM', 100, 20)).to.be.true;
    expect(utilsSpy.callCount).to.equal(1);
    utilsSpy.restore();
  });
});
