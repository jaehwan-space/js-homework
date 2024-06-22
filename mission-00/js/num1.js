function getValueAtObject(obj, key) {
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  } else {
    throw new Error(
      `getValueAtObject 함수 / "${key}" 값을 객체에서 찾을 수 없습니다.`
    );
  }
}

const person = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};

console.log(getValueAtObject(person, "name")); // 'Alice'
console.log(getValueAtObject(person, "age")); // 25
console.log(getValueAtObject(person, "city")); // 'Wonderland'
console.log(getValueAtObject(person, "country")); // Error !
