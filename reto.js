/* Ejercicio 1 */

/* const number = prompt('Inserte su número.');

if (number < 0) {
    alert('Esto es un número negativo.');
} else {
    alert('Este es un número positivo.');
} */

/* Ejercicio 2 */

/* let x = prompt('Ingrese número, para saber si es divisible entre 2');

if (x % 2 === 0) {
    alert('X número es divisible entre 2.');
} else {
    alert('x número no es divisible entre 2.');
}
 */

/* Ejercicio 3 */

/* const x = prompt('Ingrese primer número');
const y = prompt('Ingrese segundo número');

if (x > y) {
    alert('El número ' + x + ' es mayor.');
} else {
    alert('El número ' + y + ' es mayor.');
} */

/* Ejercicio 7 */

/* const dia = prompt('Sú dia de la semana');

if (dia === 'Lunes') {
    alert('Su día es Lunes.');
} else if (dia === 'Viernes') {
    alert('Su día es Viernes.');
} else if (dia === 'Sabado') {
    alert('Su día es Sabado.');
} else if (dia === 'Domingo') {
    alert('Su día es Domingo.');
} else {
    alert('Ha digitado otra palabra.');
} */

/* Ejercicio 8 */

/* const calificacion = prompt('Ingrese su nota promedia');

if (calificacion == 10) {
    alert('Excelente nota.');
} else if (calificacion == 8) {
    alert('Nota regular.');
} else if (calificacion == 9) {
    alert('Buena nota.');
} else if (calificacion == 6) {
    alert('Nota regular.');
} */

/* Ejercicio 11 */

/* const year = prompt('Ingrese tus años de antiguedad');

if (year == 1) {
    alert('Su bono es de $100.');
} else if (year == 2) {
    alert('Su bono es de $200.');
} else if (year == 3) {
    alert('Su bono es de $300.');
} else if (year == 4) {
    alert('Su bono es de $400.');
} else if (year == 5) {
    alert('Su bono es de $500.');
} else if (year > 5) {
    alert('Su bono es de $1000.');
} */

/* Ejercicio 9 */

/* const edad = prompt('Ingrese edad:');

if (edad >= 18) {
    alert('Usted puede votar.');
} else {
    alert('Usted no puede votar.');
} */

/* Ejercicio 13 */

/* const iceCream = prompt('Bienvenid@, ¿Qúe helado topping de pedir?');

if (iceCream === 'topping de oreo') {
    alert('Un helado topping de oreo, seria 10 MXN.');
} else if (iceCream === 'topping de KitKat') {
    alert('Un helado topping de KitKat, seria 15 MXN.');
} else if (iceCream === 'topping de brownie') {
    alert('Un helado topping de brownie, seria 20 MXN.');
} else if (iceCream === 'helado sin topping') {
    alert('Un helado sin topping, seria 50 MXN.');
} else {
    alert('No tenemos este topping, lo sentimos.');
} */


/* ------------  Reto 2  ---------------- */

/* Ejercicio 1 */

/* const password = prompt('Ingrese su contraseña');

if (password === 'contraseña') {
    alert('Su contraseña es correcta: ' + password + '.');
} else {
    alert('Su contraseña es incorrecta: ' + password + '.');
} */

/* Ejercicio 2 */

const yearOld = prompt('¿Cuántos años tienen?');
const months = prompt('¿Cuánto es tu mensualidad?');

if (yearOld >= 18 && months >= 1000) {
    alert('Usted debe de tributar.');
} else {
    alert('Usted es menor de y no debe nada.');
}