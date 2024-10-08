export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (total, student) => total + student.id, 0
    );
  }
  return 0;
}
