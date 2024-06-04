export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  let finalStr = '';

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      if (finalStr) {
        finalStr += '-';
      }
      finalStr += value.slice(startString.length);
    }
  }
  return finalStr;
}
