export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((std) => std.location === city)
    .map((std) => {
      const gradeObject = newGrades.find((grade) => grade.studentId === std.id);
      return {
        ...std,
        grade: gradeObject ? gradeObject.grade : 'N/A',
      };
    });
}
