/* function looperFood(text, number) {
    for (let i = 0; i < number; i++) {
        console.log(`${text}: ${number}`);
    }
}

looperFood('Hamburger', 10);

function feets(x, y) {
    for (let i = x; i < y; i++) {
        console.log(i);
    }
}

feets(2, 6);

const temperatures = [24, 56, 78, 29, 30];

for (let i = 0; i < temperatures.length; i++) {
    console.log(`${temperatures[i]} °`);
} */


const cellphones = ['Galaxy', 'Y9', 'Xperia'];

function search(cellphones, searchCell) {
    const found = cellphones.find(cellphone => cellphone === searchCell);
    if (found) {
        console.log(searchCell + ' found.');
    } else {
        console.log('Not found.');
    }
}

search(cellphones, 'Galaxy');