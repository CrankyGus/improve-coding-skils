let input = 101

function numberpalindrome(x) {
  if (x < 0) return false;
  if (x % 10 === 0 && x !== 0) return false;

  let reverseNum = 0;
  while (x > reverseNum) {
    reverseNum = reverseNum * 10 + (x % 10);
    x = Math.floor(x / 10);
    // console.log({reverseNum,x})
  }
  return x === reverseNum || x === Math.floor(reverseNum / 10);
}

console.log(numberpalindrome(input));
