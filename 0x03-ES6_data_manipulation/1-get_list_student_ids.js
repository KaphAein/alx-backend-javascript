export default function getListStudentsIds(students) {
  if (students instanceof Array) {
    return students.map(student => student.id);
  }
  return [];
}
