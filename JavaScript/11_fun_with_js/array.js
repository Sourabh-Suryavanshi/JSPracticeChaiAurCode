const arr = [1, 3, 5, 7, 10];
function check(num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num && i < arr.length) {
      return i;
    } else if (arr[i] > num && i < arr.length) {
      return i;
    }
  }
  return arr.length;
}

const index = check(14);
console.log(index);
