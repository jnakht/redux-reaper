
import { produce } from 'immer';

const employee = {
    name: "Nadim",
    address: {
        country: "Bangladesh",
        city: "Dhaka"
    }
}

const employee2 = employee;

 // will change the original employee
employee2.name = "Jishi";
employee2.address = {
    country: "BD",
    city: "Kurigram"
}

employee2.address.city = "Rangpur";

// console.log(employee);
// console.log(employee2);



const student = {
    name: "Jisan",
    address: {
        country: "France",
        city: "Paris"
    }
}
const student2 = { ...student};

// will not change the original one
student2.name = "Asif";
// but will change the original one 
// student2.address.city = "Rajshahi";


// best way 
const student3 = {
    ...student,
    name: "Franklin Rusevelt",
    address: {
        ...student.address,
        country: "USA",
        city: "New York"
    }
}

console.log(student);
// console.log(student2);
console.log(student3);



// in redux toolkit, if we even mutate the state, it won't create a problem
// because it handles it by using immer under-the-hood
// install immer, npm i immer



const student4 = produce(student, (draft) => {
    draft.name = 'Dr. Thanos',
    draft.address.country = 'not known',
    draft.address.city = 'not known'
}) 
console.log(student4);


// we dont need to use immer, redux uses it, and we don't have to think about that