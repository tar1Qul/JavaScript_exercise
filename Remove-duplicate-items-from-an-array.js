

const frute = ['apple', 'apple', 'orenge', 'banana', 'banana'];
const number = [1, 2, 3, 4, 5, 5, 4, 3, 2, 7];

console.log("frute =", frute);
console.log("number =", number);

function noDuplicate(arry) {
    const unique = [];
    for (const item of arry) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}

console.log("\n");
const uniqueFrutes = noDuplicate(frute);  
console.log("unique frutes:", uniqueFrutes);

console.log("\n");
const uniqueNumbers = noDuplicate(number); 
console.log("unique numbers:", uniqueNumbers);

