while (true) {
// Ask for two numbers
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

console.clear();
console.log(`You entered: num1 = ${num1}, num2 = ${num2}`);
console.log("--------------------------");

// Comparisons
console.log(`1. ${num1} > ${num2} => ${num1 > num2}`);
console.log(`2. ${num1} < ${num2}=> ${num1 < num2}`); console.log(`3. ${num1}==${num2}=> ${num1 == num2}`);
        console.log(`4. ${num1} >= ${num2} => ${num1 >= num2}`);
        console.log(`5. ${num1} <= ${num2}=> ${num1 <= num2}`); console.log(`6. ${num1} !=${num2}=> ${num1 != num2}`);

                // Logical operations example
                console.log(`7. (${num1} > 0 && ${num2} > 0) => ${num1 > 0 && num2 > 0}`);
                console.log(`8. (${num1} > 0 || ${num2} > 0) => ${num1 > 0 || num2 > 0}`);

                // Ask if the user wants to try again
                let again = prompt("Do you want to try again? (yes/no):");
                if (again.toLowerCase() !== "yes") {
                console.log("Program ended.");
                break;
                }
                }