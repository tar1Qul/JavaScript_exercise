let ticketPrice = parseFloat(prompt("Enter the ticket price:"));
let age = parseInt(prompt("Enter your age:"));
let isStudent = prompt("Are you a student? (yes/no)").toLowerCase();

let finalPrice = age < 10
    ? 0
    : isStudent === "yes"
        ? ticketPrice * 0.5
        : age >= 60
            ? ticketPrice * 0.85
            : ticketPrice;

alert("Your ticket price is: " + finalPrice + " Tk");
