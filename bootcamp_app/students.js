const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT students.id, students.name, cohorts.name as cohort_name
FROM students
JOIN cohorts on students.cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
LIMIT ${process.argv[3] || 5};
`)
  .then(res => {
    for (const record of res.rows) {
      console.log(`${record.name} has an id of ${record.id} and was in the ${record.cohort_name} cohort`)
    }
  })
  .catch(err => console.error('query error', err.stack));