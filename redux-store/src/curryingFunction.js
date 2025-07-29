



function add(a) {
    return function(b) {
        return a + b;
    }
}
console.log(add(4)); // function, that takes another parameter b
console.log(add(4)(5)); // a + b


function add3(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}
console.log(add3(5)); //function
console.log(add3(5)(5)); //function
console.log(add3(5)(5)(5)); // a + b + c



const sub = (a) => (b) => a - b;
console.log(sub(5)); // function, that takes another parameter
console.log(sub(5)(5)); // a - b



// real life example, we give total 30% discount on all customers, later we can change the discount to 25 %, on any amount
const getDiscountOnPercentage = (percent) => (amount) => amount - amount * percent;

// 30 % discount function, that will take any amount later
const thirtyPercentOnAmount = getDiscountOnPercentage(0.3);


const price1 = thirtyPercentOnAmount(5000);
console.log(price1);




