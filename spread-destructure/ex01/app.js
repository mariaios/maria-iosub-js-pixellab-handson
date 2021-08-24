let array1 = [10, 20, 30];
let array2 = [...array1, 40, 50];
console.log(array1);

let array4 = [104, 105];
let array3 = [101, 102, 103, ...array4, 106, 107, 108];
console.log(array3);

let array5 = [1, 2, 3, 4];
let array6 = [6, 7, 8];
const array7 = [...array5, 5, ...array6];
console.log(array7);

let array8 = [1, 2, 3, 4, 5];
let array9 = [...array8];

array8.reverse().forEach((item) => {
  console.log(item);
});
