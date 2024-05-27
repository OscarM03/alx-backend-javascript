export default function createEmployeesObject(departmentName, employees) {
  const employeeData = {
    [departmentName]: employees,
  };
  return employeeData;
}
