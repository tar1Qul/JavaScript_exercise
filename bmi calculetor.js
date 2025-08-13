while (true) {
    // Ask height in feet
    let heightFeet = parseFloat(prompt("Enter your height in feet: "));
    let heightCm = heightFeet * 30.48; // 1 foot = 30.48 cm
    let heightM = heightCm / 100; // convert cm to meters

    // Ask weight
    let weight = parseFloat(prompt("Enter your weight: "));
    let unit = prompt("\nIs this weight in kg or lb? (kg/lb):").toLowerCase();

    if (unit === "lb") {
        weight = weight * 0.453592; // convert pounds to kg
    }

    // Calculate BMI
    let bmi = weight / (heightM ** 2);

    console.clear();
    console.log(`\n\nHeight: ${heightFeet} ft = ${heightCm.toFixed(2)} cm = ${heightM.toFixed(2)} m`);
    console.log(`Weight: ${weight.toFixed(2)} kg`);
    console.log(`\nYour BMI is: ${bmi.toFixed(2)}`);

    // BMI category
    if (bmi < 18.5) {
        console.log("Category: Underweight");
    } else if (bmi < 24.9) {
        console.log("Category: Normal weight");
    } else if (bmi < 29.9) {
        console.log("Category: Overweight");
    } else {
        console.log("Category: Obese");
    }

    // Ask to run again
    console.log("\n");
    let again = prompt("Do you want to calculate again? (yes/no):");
    if (again.toLowerCase() !== "yes") {
        console.log("Program ended.");
        break;
    }
}
