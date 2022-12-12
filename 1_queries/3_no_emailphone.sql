SELECT name, id, cohort_id
from students
WHERE email IS NULL 
OR phone IS NULL;