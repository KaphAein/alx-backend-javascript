const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} filePath The path to the CSV data file.
 * @author Cherif Fadaly
 */

const countStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (error, fileData) => {
    if (error) {
      reject(new Error('Cannot load the database'));
    }
    if (fileData) {
      const fileLines = fileData.toString('utf-8').trim().split('\n');
      const studentsByField = {};
      const headerFields = fileLines[0].split(',');
      const studentFields = headerFields.slice(0, headerFields.length - 1);

      for (const line of fileLines.slice(1)) {
        const studentData = line.split(',');
        const studentFieldValues = studentData.slice(0, studentData.length - 1);
        const fieldOfStudy = studentData[studentData.length - 1];

        if (!Object.keys(studentsByField).includes(fieldOfStudy)) {
          studentsByField[fieldOfStudy] = [];
        }

        const studentEntries = studentFields.map((fieldName, idx) => [fieldName, studentFieldValues[idx]]);
        studentsByField[fieldOfStudy].push(Object.fromEntries(studentEntries));
      }

      const totalStudents = Object.values(studentsByField)
        .reduce((count, group) => count + group.length, 0);

      console.log(`Number of students: ${totalStudents}`);
      for (const [field, students] of Object.entries(studentsByField)) {
        const studentNames = students.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${students.length}. List: ${studentNames}`);
      }

      resolve(true);
    }
  });
});

module.exports = countStudents;
