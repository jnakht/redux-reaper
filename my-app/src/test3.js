


// normal function
const add = (a, b) => a + b;

console.log(add(2, 3));

// curry function 
const addCurry = (a) => (b) => a + b;
console.log(addCurry(2)(3));

// this curry function actually looks like this: 
const addCurry2 = (a) => {
    return function(b) {
        return a + b;
    }
}
console.log(addCurry2); // this will console the function
console.log(addCurry2(5)); // this will also console function inside return statement
console.log(addCurry2(5)(5)); // this is the value a + b



// a real life example would be
const discount = (percentage) => (amount) => percentage * amount / 100;

const thirtyPercentDiscount = discount(30);
const discount1 = thirtyPercentDiscount(1000);
console.log(discount1);
