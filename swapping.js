
// 1. Swap with a Temporary Variable
let a = 10;
let b = 20;

console.log("Before Swap: a =", a, "b =", b);

let temp = a;
a = b;      
b = temp;   

console.log("After Swap: a =", a, "b =", b);
console.log("\n");

// 2. Swap without Temporary Variable
let x = 5;
let y = 7;

console.log("Before Swap: x =", x, "y =", y);

x = x + y; 
y = x - y;
x = x - y;

console.log("After Swap: x =", x, "y =", y);
console.log("\n");

// 3. Swap without Temp
let p = 15;
let q = 25;

console.log("Before Swap: p =", p, "q =", q);

p = p ^ q;
q = p ^ q;
p = p ^ q;

console.log("After Swap: p =", p, "q =", q);
console.log("\n");

// 4. Swap using Array Destructuring
let m = 1;
let n = 2;

console.log("Before Swap: m =", m, "n =", n);

[m, n] = [n, m]; 


console.log("After Swap: m =", m, "n =", n);


