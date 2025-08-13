const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askMark() {
    rl.question("Enter your mark (0-100): ", (input) => {
        let mark = parseFloat(input);
        let grade = "";
        let gpa = 0;

        if (mark >= 80 && mark <= 100) {
            grade = "A+";
            gpa = 5.0;
        } else if (mark >= 70) {
            grade = "A";
            gpa = 4.0;
        } else if (mark >= 60) {
            grade = "A-";
            gpa = 3.5;
        } else if (mark >= 50) {
            grade = "B";
            gpa = 3.0;
        } else if (mark >= 40) {
            grade = "C";
            gpa = 2.0;
        } else if (mark >= 33) {
            grade = "D";
            gpa = 1.0;
        } else if (mark >= 0) {
            grade = "F";
            gpa = 0.0;
        } else {
            console.log("Invalid input! Please enter a mark between 0 and 100.");
            return askMark();
        }

        console.log(`You entered: ${mark}`);
        console.log(`Your grade is: ${grade}`);
        console.log(`Your GPA is: ${gpa}`);

        rl.question("Do you want to check another grade? (yes/no): ", (answer) => {
            if (answer.toLowerCase() === "yes") {
                askMark();
            } else {
                console.log("Program ended.");
                rl.close();
            }
        });
    });
}

askMark();
