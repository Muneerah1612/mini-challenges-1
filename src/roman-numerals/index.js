/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let dataObj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let roughDecimalArr = [];
  let sum = 0;

  Array.from(roman).forEach((element) => {
    roughDecimalArr.push(dataObj[element]);
  });

  for (let i = roughDecimalArr.length; i >= 0; i--) {
    if (sum < roughDecimalArr[i]) {
      sum = sum + roughDecimalArr[i];
    } else if (sum > roughDecimalArr[i]) {
      sum = sum - roughDecimalArr[i];
    }
  }

  return sum;
}

module.exports = romanToDecimal;
