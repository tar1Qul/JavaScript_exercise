function averageOfOddNumbers(arr) {
    const oddNumbers = arr.filter(num => num % 2 !== 0);
    const sum = oddNumbers.reduce((acc, num) => acc + num, 0);
    return oddNumbers.length ? sum / oddNumbers.length : 0;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const average = averageOfOddNumbers(numbers);
console.log("Average of the odd number is: ", average);
