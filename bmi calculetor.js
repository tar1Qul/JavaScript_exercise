while (true) {
    // Ask height in feet.inches (e.g., 5.11 for 5 feet 11 inches)
    let heightInput = prompt("Enter your height: ");
    let heightParts = heightInput.split(".");
    let feet = parseInt(heightParts[0]);
    let inches = heightParts[1] ? parseInt(heightParts[1]) : 0;

    let heightCm = feet * 30.48 + inches * 2.54;
    let heightM = heightCm / 100;

    let weight = parseFloat(prompt("Enter your weight: "));
    let unit = prompt("Is this weight in kg or lb? (kg/lb): ").toLowerCase();

    if (unit === "lb") {
        weight = weight * 0.453592;
    }

    let bmi = weight / (heightM ** 2);

    console.clear();
    console.log(`\nHeight: ${feet} ft ${inches} in = ${heightCm.toFixed(2)} cm = ${heightM.toFixed(2)} m`);
    console.log(`Weight: ${weight.toFixed(2)} kg`);
    console.log(`\nYour BMI is: ${bmi.toFixed(2)}`);

    if (bmi < 18.5) {
        console.log("Category: Underweight");
    } else if (bmi < 24.9) {
        console.log("Category: Normal weight");
    } else if (bmi < 29.9) {
        console.log("Category: Overweight");
    } else {
        console.log("Category: Obese");
    }

    console.log("\n");
    let again = prompt("Do you want to calculate again? (yes/no): ");
    if (again.toLowerCase() !== "yes") {
        console.log("Program ended.");
        break;
    }
}
