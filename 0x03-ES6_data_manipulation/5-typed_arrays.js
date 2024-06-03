export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const Int8arr = new DataView(buffer);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  Int8arr.setInt8(position, value);
  return Int8arr;
}
