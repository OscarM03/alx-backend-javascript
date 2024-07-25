const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / to return correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET cart/id to return correct response', (done) => {
    request.get(`${API_URL}/cart/16`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 16');
      done();
    });
  });

  it('GET cart/id to return correct response', (done) => {
    request.get(`${API_URL}/cart/-`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('POST /login to return correct response', (done) => {
    request.post(`${API_URL}/login`, {json: {userName: 'Johnnie'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Johnnie');
      done();
    });
  });

  it('GET /available_payments to return valid response', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});
