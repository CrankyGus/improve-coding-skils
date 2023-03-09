let input = "txt";

function parlindrome(x) {
  return x === x.split("").reverse().join("");
}

console.log(parlindrome(input));

