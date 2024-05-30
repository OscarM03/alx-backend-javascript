import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // getter for the floors
  get floors() {
    return this._floors;
  }

  // setter
  set floors(num) {
    if (typeof num !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = num;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
