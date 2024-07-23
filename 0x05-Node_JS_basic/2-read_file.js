const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        const lines = data.trim().split('\n');
        
        if (lines.length <= 1) {
            throw new Error('Cannot load the database');
        }
        
        const students = lines.slice(1).map(line => line.split(',')).filter(student => student.length === 4);

        const fields = {};
        students.forEach(student => {
            const field = student[3];
            const firstname = student[0];
            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(firstname);
        });

        console.log(`Number of students: ${students.length}`);
        for (const [field, firstnames] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
        }
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;

