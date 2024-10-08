/**
 * Retrieves a list of students.
 * @author Cherif Fadaly
 * @returns array of ids from a list of object
 */
export default function getListStudentsIds() {
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  return students;
}
