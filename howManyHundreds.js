const howManyHundreds = function(x) {
  return x % 100 === 0 ? x / 100 : [x - (x % 100)] / 100
}

console.log(howManyHundreds(100), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
console.log(howManyHundreds(123456), "=?", 1234);