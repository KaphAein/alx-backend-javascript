const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Cherif Fadaly
 */

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();

    const lines = data.split('\n');
    const header = lines.shift(); // First line is the header

    if (!header || lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = {};
    let totalStudents = 0;

    for (const line of lines) {
      if (line.trim() === '') continue; // Skip empty lines
      const parts = line.split(',');
      if (parts.length < 4) continue; // Skip invalid lines

      const field = parts[3]; // Field (e.g., CS, SWE)
      const firstname = parts[0]; // First name

      if (!students[field]) students[field] = [];
      students[field].push(firstname);
      totalStudents++;
    }

    console.log(`Number of students: ${totalStudents}`);

    for (const [field, names] of Object.entries(students)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
