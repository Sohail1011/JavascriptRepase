/* const computer = {
    monitor: 'Asus',
    keyboard: 'Logitech',
    CPU: 'AMD',
    mouse: 'Genius'
}

console.log(JSON.stringify(computer));
console.log(computer); */

function computer(marca, nombre, sistema, cpu) {
    this.marca = marca;
    this.nombre = nombre;
    this.sistema = sistema;
    this.cpu = cpu;
}

const computer1 = new computer('Asus', 'Zenbook', 'Zorin OS', 'Intel');
const computer2 = new computer('HP', 'Envy', 'Deepin', 'Intel');
const computer3 = new computer('Advance', 'Notebook', 'Windows 10', 'AMD');
const computer4 = new computer('Lenovo', 'Thinkpad', 'Linux Mint', 'AMD');

const listComputers = [computer1, computer2, computer3, computer4];

console.log(listComputers);


function planets(name, kilometers) {
    this.name = name;
    this.kilometers = kilometers;
}

const planet1 = new planets('Saturn', 10);
const planet2 = new planets('Jupiter', 50)

console.log(planet2);