function getNumberAtArray(arr, index) {
  if (index < 0 || index >= arr.length) {
    throw new Error("getNumberAtArray 함수 / 유효하지 않은 idnex 값입니다.");
  }

  return arr[index];
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
