// Arrow function syntax - ES6 - function syntax - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

let kotek = (param) => param * 2; /// funkcja może mieć wiele argumentow, ale to że nie ma nawiasow wąsatych zatem oznacza to że zwróci deklaracje (ma niewidoczny argument return)
let piesek = (param) => { return param * 3 }; // normalna arrow function - dowolna ilość argumentów oraz dowolna treść funkcji
let owieczka = param => param + ' i owieczka'; // arrow function z jednym argumentem (bez nawiasów na początku) i zwracająca deklaracje w ciele (bez nawiasów wąsatych)

console.log(kotek(2))
console.log(piesek(3))
console.log(owieczka('Kuba'))
