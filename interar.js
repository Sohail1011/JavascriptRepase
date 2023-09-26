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

console.log(array); */


/* let luces = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10]; */

// lenght es la cantidad de elementos del arreglo
/* for (let i = 20; i > luces.length; i--) {
    luces.pop(i);
}

console.log(luces); */


/* const cpu = ['AMD', 'Intel', 'Qualcomm', 'Samsung'];

cpu.map((i) => {
    console.log(`${i}`);
});

const laptops = ['Asus', 'HP', 'Lenovo', 'Sony', 'Samsung', 'Huawei', 'Toshiba'];

laptops.forEach((l) => {
    console.log(`${l}`);
}) */

const number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

/* for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}

let suma = 0;
for (let i = 0; i < number.length; i++) {
    suma += number[i];
}

console.log(suma); */

/* let i = 0;

while (i < 10) {
    console.log(i);
    i++
} */

let i = 0;

do {
    console.log(i);
    i++;
} while (i < 10);

const person = [
    { id: 1, name: 'Samus' },
    { id: 2, name: 'Tomb Raider' },
];

person.forEach((p) => {
    console.log(p.name);
})


// MAP
const newArray = number.map((num) => {
    return num * 2;
})

console.log(newArray);

const parArray = number.map((num) => {
    if (num % 2 === 0) {
        return num;
    }
    return 0;
})

console.log(parArray);