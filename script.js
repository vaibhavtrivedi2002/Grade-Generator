function calculateGrade() {
    var marks = document.getElementById("marksInput").value;
    var gradeResult = document.getElementById("gradeResult");

    // Checking if the input is a valid number
    if (isNaN(marks) || marks === "" || marks < 0 || marks > 100) {
        gradeResult.innerText = "Please enter a valid number between 0 and 100.";
        return;
    }

    // Calculating grade based on marks
    var grade;
    if (marks >= 90) {
        grade = 'A+';
    } else if (marks >= 80) {
        grade = 'A';
    } else if (marks >= 70) {
        grade = 'B';
    } else if (marks >= 60) {
        grade = 'C';
    } else if (marks >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    gradeResult.innerText = "Your grade is: " + grade;
}
