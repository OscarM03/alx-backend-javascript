export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }
  const sum = students.reduce((accumulator, currentvalue) => accumulator + currentvalue.id, 0);

  return sum;
}
