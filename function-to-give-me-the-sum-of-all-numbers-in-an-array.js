function sumOfNumbers(numbers) {
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
const numbs = [4, 2, 1, 6];
const sum = sumOfNumbers(numbs);
console.log('Sum of numbers is', sum);
