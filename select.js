/* const carros = new Array('Toyota', 'Hyundai', 'Mitsubishi');
for (let i = 0; i < carros.length; i++) {
    console.log(carros[i]);
} */

const numeros = [23, 45, 6, 9];

function area([a, b, c, d]) {
    return (a * b) - c * d;
}

console.log(area(numeros));


const items = ['Laptop', 'Boat', 'Car', 'Monitor'];

const itemSize = items.map((i) => i.length <= 3 ? 'Demasiado corto' : 'Demasiado largo');

console.log(itemSize);