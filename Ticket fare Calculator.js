let ticketPrice = parseFloat(prompt("Enter the ticket price:"));

let age = parseInt(prompt("Enter your age:"));

let isStudent = prompt("Are you a student? (yes/no)").toLowerCase();

let finalPrice;

if (age < 10) {
    finalPrice = 0;
} else if (isStudent === "yes") {
    finalPrice = ticketPrice * 0.5; 
} else if (age >= 60) {
    finalPrice = ticketPrice * 0.85;
} else {
    finalPrice = ticketPrice; 
}

alert("\nYour ticket price is: " + finalPrice + " Tk");
