let list = [2, 7, 11, 15];
let target = 9;

function twosum(list, target) {
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] + list[j] === target) return { i, j };
    }
  }
}

console.log(twosum(list, target));
