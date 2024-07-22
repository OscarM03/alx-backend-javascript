// Reading a file synchronously with Node JS

const fs = require('fs');
const csv = require('csv-parser');
const stream = require('stream');

const countStudents = (filePath) => {
  try {
    const studentsByField = {};

    const data = fs.readFileSync(filePath, 'utf-8');

    const readableStream = stream.Readable.from(data);

    readableStream.pipe(csv())
      .on('data', (row) => {
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
        const totalStudents = Object.values(studentsByField)
          .reduce((startValue, fieldData) => startValue + fieldData.count, 0);

        console.log(`Number of students: ${totalStudents}`);

        for (const [field, data] of Object.entries(studentsByField)) {
          console.log(`Number of students in ${field}: ${data.count}. List: ${data.names.join(', ')}`);
        }
      });
  } catch (err) {
    console.log('Cannot load the database');
  }
};

module.exports = countStudents;
