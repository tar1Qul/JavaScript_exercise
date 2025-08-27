function calculateElectronicsBudget(laptopQty, tabletQty, mobileQty) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;

  const total =
    (laptopQty * laptopPrice) +
    (tabletQty * tabletPrice) +
    (mobileQty * mobilePrice);

  return total;
}

//test cases
console.log(calculateElectronicsBudget(1, 1, 1)); 
console.log(calculateElectronicsBudget(2, 0, 1)); 
console.log(calculateElectronicsBudget(0, 3, 2)); 
console.log(calculateElectronicsBudget(5, 2, 4)); 

