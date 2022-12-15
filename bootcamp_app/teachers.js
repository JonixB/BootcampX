const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});
const values = [process.argv[2]];
pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name LIKE '%' || $1 || '%';
`, values)
  .then(res => {
    for (const record of res.rows) {
      console.log(`${record.cohort}: ${record.teacher}`);
    }
  })
  .catch(err => console.error('query error', err.stack));