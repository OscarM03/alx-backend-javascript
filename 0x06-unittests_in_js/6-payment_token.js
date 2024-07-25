// 6-payment_token.js

/**
 * Simulates an API call that returns a payment token.
 * @param {boolean} success - Determines if the API call is successful.
 * @returns {Promise} - Resolves with an object if successful, otherwise does nothing.
 */
const getPaymentTokenFromAPI = (success) => {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      // Does nothing
    }
  });
};

module.exports = getPaymentTokenFromAPI;

