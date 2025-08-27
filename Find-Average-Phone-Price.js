function findAveragePhonePrice(phones) {
  if (phones.length === 0) return 0; // handle empty array case

  let totalPrice = 0;
  for (const phone of phones) {
    totalPrice += phone.price;
  }

  return totalPrice / phones.length;
}

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

console.log(findAveragePhonePrice(phones));  
// Expected Output: 56333.33 (approx)

// Case 1: Only one phone
console.log(findAveragePhonePrice([{ model: "PhoneX", brand: "Vivo", price: 20000 }])); 
// Output: 20000

// Case 2: Two phones with same price
console.log(findAveragePhonePrice([
  { model: "PhoneY", brand: "Realme", price: 30000 },
  { model: "PhoneZ", brand: "Realme", price: 30000 }
])); 
// Output: 30000

// Case 3: Empty array
console.log(findAveragePhonePrice([])); 
// Output: 0

// Case 4: High-price premium phones
console.log(findAveragePhonePrice([
  { model: "Pro1", brand: "Apple", price: 120000 },
  { model: "Pro2", brand: "Samsung", price: 110000 }
])); 
// Output: 115000
