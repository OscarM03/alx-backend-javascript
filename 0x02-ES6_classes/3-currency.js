export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getter for code
  get code() {
    return this._code;
  }

  // setter
  set code(symbol) {
    if (typeof symbol !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = symbol;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // setter
  set name(str) {
    if (typeof str !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = str;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
