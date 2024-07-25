// 6-payment_token.test.js

const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return successful response when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch(done);
  });

  it('should not return anything when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        expect(response).to.be.undefined;
        done();
      })
      .catch(done);
  });
});
