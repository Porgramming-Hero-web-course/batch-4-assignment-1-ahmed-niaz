const sumArray = (numbers: number[]): number => {
  let sum: number = 0;
  for (let n = 0; n < numbers.length; n++) {
    sum += numbers[n];
  }
  return sum;
};

// console.log(sumArray([1, 2, 3]));
