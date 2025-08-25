let now = new Date();  
console.log(now);

let specificDate = new Date(2025, 7, 25, 10, 30, 0);
console.log(specificDate);

let fromString = new Date("2025-08-25T10:30:00");
console.log(fromString);

let fromTimestamp = new Date(1692956400000);
console.log(fromTimestamp);


// Getting Date and Time
console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Day:", today.getDate());
console.log("Hour:", today.getHours());
console.log("Minutes:", today.getMinutes());
console.log("Seconds:", today.getSeconds());
console.log("Milliseconds:", today.getMilliseconds());
console.log("Day of week:", today.getDay()); 

// Setting Date and Time

let newDate = new Date();

newDate.setFullYear(2030);
newDate.setMonth(11);
newDate.setDate(31);
newDate.setHours(23);
newDate.setMinutes(59);

console.log(newDate);

// Formatting Dates
let d = new Date();

console.log(d.toDateString()); 
console.log(d.toTimeString()); 
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString()); 
console.log(d.toISOString()); 
