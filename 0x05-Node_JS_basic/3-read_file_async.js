const fs = require('fs');
const csv = require('csv-parser');
const { Readable } = require('stream');

const countStudents = (filePath) => new Promise((resolve, reject) => {
  try {
    const studentsByField = {};
    const data = fs.readFileSync(filePath, 'utf-8');
    const readableStream = Readable.from(data);

    readableStream.pipe(csv())
      .on('data', (row) => {
        if (!row.field || !row.firstname) {
          return;
        }

        const { field } = row;
        const firstName = row.firstname;

        if (!studentsByField[field]) {
          studentsByField[field] = {
            count: 0,
            names: [],
          };
        }

        studentsByField[field].count += 1;
        studentsByField[field].names.push(firstName);
      })
      .on('end', () => {
        try {
          const totalStudents = Object.values(studentsByField)
            .reduce((sum, fieldData) => sum + fieldData.count, 0);

          console.log(`Number of students: ${totalStudents}`);

          for (const [field, data] of Object.entries(studentsByField)) {
            console.log(`Number of students in ${field}: ${data.count}. List: ${data.names.join(', ')}`);
          }

          resolve();
        } catch (err) {
          reject(new Error('Cannot load the database'));
        }
      });
  } catch (err) {
    reject(new Error('Cannot load the database'));
  }
});

module.exports = countStudents;
