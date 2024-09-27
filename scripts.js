// Placeholder function for searching student results
function searchResults() {
    const studentId = document.getElementById('studentId').value;

    // Fake data for demonstration purposes
    const studentData = {
        '1001': {
            attendance: 90,
            projectReview: 85,
            assessment: 88,
            projectSubmission: 92,
            linkedinPost: 80,
        },
        '1002': {
            attendance: 75,
            projectReview: 78,
            assessment: 82,
            projectSubmission: 89,
            linkedinPost: 85,
        }
    };

    if (studentData[studentId]) {
        document.getElementById('attendanceResult').innerText = studentData[studentId].attendance;
        document.getElementById('projectReviewResult').innerText = studentData[studentId].projectReview;
        document.getElementById('assessmentResult').innerText = studentData[studentId].assessment;
        document.getElementById('projectSubmissionResult').innerText = studentData[studentId].projectSubmission;
        document.getElementById('linkedinPostResult').innerText = studentData[studentId].linkedinPost;
    } else {
        alert('Student ID not found');
    }
}
