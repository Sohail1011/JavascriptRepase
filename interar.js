// ITERADORES
/* for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
} */

/* for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
} */

/* 
for (let i = 20; i > 1; i--) {
    if (i % 2 === 0) {
        console.log(i);
    }
} */

/* let array = [];

for (let i = 0; i <= 20; i++) {
    array.push(i);
}

console.log(array);
 */

let array = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];

for (let i = 20; i > array.length; i--) {
    array.pop(i);
}

console.log(array);