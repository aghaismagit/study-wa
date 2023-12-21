// 1) O(N^2)
// 2) O(N)
// 3) В лучшем случае 1 и 2 число в сумме дают 10.
// В Худшем - ни одно, тогда придется проверить абсолютно все комбинации. Средний случай - ближе к середине интераций первого цикла.
// В худшем случае сложность алгоритма оценивается как O(N^2)
// 4) O(N)

const str1 = "Xerox";
const str2 = "erXox";
const str3 = "eeeee";

function containsX(str) {
  foundX = false;
  for (let i = 0; i < str.length; i++) {
    console.log(i);
    if (str[i] === "X") {
      foundX = true;
      break;
    }
  }

  return foundX;
}

console.log(containsX(str1));
console.log(containsX(str2));
console.log(containsX(str3));
