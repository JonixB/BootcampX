SELECT SUM(completed_at - started_at) / COUNT(assistance_requests) as average_assistance_request_duration
FROM assistance_requests;