import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // getter for amount
  get amount() {
    return this._amount;
  }

  // setter
  set amount(num) {
    if (typeof num !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = num;
  }

  // getter for currency
  get currency() {
    return this._currency;
  }

  // setter
  set currency(symbol) {
    if (!(symbol instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = symbol;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('ConversionRtae must be a number');
    }
    return amount * conversionRate;
  }
}
