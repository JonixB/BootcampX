SELECT teachers.name AS teacher, students.name as student, assignments.name as assignment, (assistance_requests.completed_at - assistance_requests.started_at)  as duration
FROM teachers
JOIN assistance_requests
  ON assistance_requests.teacher_id = teachers.id
JOIN students
  ON assistance_requests.student_id = students.id
JOIN assignments
  ON assistance_requests.assignment_id = assignments.id
ORDER BY duration;