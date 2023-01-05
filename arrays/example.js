const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array[0]);
console.log(array[1]);
console.log(array[array.length - 1]);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
    console.log(element + " index " + index);
}