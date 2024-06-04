export default function updateUniqueItems(mapStructure) {
  if (!(mapStructure instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of mapStructure.entries()) {
    if (value === 1) {
      mapStructure.set(key, 100);
    }
  }
}
