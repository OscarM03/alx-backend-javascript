export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    if (!Array.isArray(students) || !students.every((name) => typeof name === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
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

  // getter for length
  get length() {
    return this._length;
  }

  // setter
  set length(num) {
    if (typeof num !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = num;
  }

  // getter for students
  get students() {
    return this._students;
  }

  // setter
  set students(names) {
    if (!Array.isArray(names) || !names.every((name) => typeof name === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = names;
  }
}
