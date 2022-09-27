const range = function(start, end, step) {
  let array = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step === 0 || step <= 0) {
    array = [];
  } else {
    for (let i = start; i <= end; i = i + step) {
      array.push(i);
    }
  }
  return array;
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));