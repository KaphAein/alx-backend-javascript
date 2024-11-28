const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} filePath The path to the CSV data file.
 * @author Cherif Fadaly
 */
const countStudents = (filePath) => {
  if (!fs.existsSync(filePath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(filePath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const linesInFile = fs
    .readFileSync(filePath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');

  const studentsByField = {};
  const headers = linesInFile[0].split(',');
  const studentProperties = headers.slice(0, headers.length - 1);

  for (const line of linesInFile.slice(1)) {
    const studentData = line.split(',');
    const studentDetails = studentData.slice(0, studentData.length - 1);
    const studentField = studentData[studentData.length - 1];

    if (!Object.keys(studentsByField).includes(studentField)) {
      studentsByField[studentField] = [];
    }

    const studentObject = studentProperties
      .map((property, index) => [property, studentDetails[index]]);
    studentsByField[studentField].push(Object.fromEntries(studentObject));
  }

  const totalStudentsCount = Object
    .values(studentsByField)
    .reduce((total, currentField) => (total || []).length + currentField.length);

  console.log(`Number of students: ${totalStudentsCount}`);

  for (const [field, students] of Object.entries(studentsByField)) {
    const studentFirstNames = students.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${students.length}. List: ${studentFirstNames}`);
  }
};

module.exports = countStudents;
