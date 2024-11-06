const countWordOccurrences = (sentence: string, word: string): number => {
  const sentenceLowerCase = sentence.toLowerCase();
  const wordLowerCase = word.toLowerCase();
  const wordAppears = sentenceLowerCase.split(" ");
  console.log(wordAppears);

  const count = wordAppears.filter((word) => word === wordLowerCase).length;
  return count;
};
// console.log(countWordOccurrences("TypeScript is great. I love TypeScript", "typescript"));
