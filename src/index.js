module.exports = function check(str, bracketsConfig) {
  const strArr = str.split('');
  const bracketArr = [];
  for (const strChar of strArr) {
    const bracketPair = findBracketPair(bracketsConfig, strChar);
    if (bracketPair === undefined) continue;
    if (bracketPair[1] === strChar && bracketPair[0] === bracketArr.at(-1)) {
      bracketArr.pop();
    } else {
      bracketArr.push(strChar);
    }
  }
  return bracketArr.length == 0;
};

function findBracketPair(bracketsConfig, bracket) {
  return bracketsConfig.find((v) => v.includes(bracket));
}

/* More elegant IMO, but less eficient (using replace)

function check(str, bracketsConfig) {
  const bracketPairs = bracketsConfig.map((subArr) => subArr.join(""));
  while (isBracketPairExists(bracketPairs, str)) {
    bracketPairs.forEach((brackets) => str = str.replace(brackets, ""));
  }
  return !str.length;
}

function isBracketPairExists(bracketPairs, str) {
  return bracketPairs.some((brackets) => str.includes(brackets));
}
*/
