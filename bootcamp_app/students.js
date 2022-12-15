const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

const values = [process.argv[2], process.argv[3]];
pool.query(`
SELECT students.id, students.name, cohorts.name as cohort_name
FROM students
JOIN cohorts on students.cohort_id = cohorts.id
WHERE cohorts.name LIKE '%' || $1 || '%'
LIMIT $2;
`, values)
  .then(res => {
    for (const record of res.rows) {
      console.log(`${record.name} has an id of ${record.id} and was in the ${record.cohort_name} cohort`)
    }
  })
  .catch(err => console.error('query error', err.stack));