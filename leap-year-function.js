function isLeapYear(year) {
  year = Number(year);
  if (!Number.isInteger(year)) throw new Error("Year must be an integer");
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

// Examples tests
console.log(2000, isLeapYear(2000));
console.log(1900, isLeapYear(1900));
console.log(2024, isLeapYear(2024)); 
console.log(2025, isLeapYear(2025));
