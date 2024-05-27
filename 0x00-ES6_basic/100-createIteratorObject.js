export default function createIteratorObject(report) {
  const employessNames = [];
  for (const department of Object.values(report.allEmployees)) {
    for (const employee of department) {
      employessNames.push(employee);
    }
  }

  return employessNames;
}
