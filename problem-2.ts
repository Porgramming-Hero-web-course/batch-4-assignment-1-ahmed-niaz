const removeDuplicates = (numbers: number[]) => {
  const uniqueArr: number[] = [];
  for (let n = 0; n < numbers.length; n++) {
    if (!uniqueArr.includes(numbers[n])) {
      uniqueArr.push(numbers[n]);
    }
  }
  return uniqueArr
};


// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));