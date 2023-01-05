const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array[0]);
console.log(array[1]);
console.log(array[array.length - 1]);

let index = 0;

while (array.length - 1 > index) {
    console.log(array[index]);

    index++;
}