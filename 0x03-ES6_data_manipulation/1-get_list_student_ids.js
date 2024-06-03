export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const ids = [];
  students.map((std) => ids.push(std.id));

  return ids;
}
