

// pure functions
const add = (a, b) => a + b;

console.log(add(2, 3));

// impure function 
let count = 1;
const addd = (a) => count += a;
console.log(addd(2));


const getDate = () => {
    return Date.now();
}
console.log(new Date(getDate()));



const getRandomNumber = () => {
    return Math.random();
}
console.log(getRandomNumber());