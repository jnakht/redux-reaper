
import { produce } from 'immer'


const person1 = {
    name: "Mir",
    address : {
        city: "Dhaka",
        Code : 400,
    }
}

// const person2 = person1;
// person2.name = "Mizba";

const person2 = {
    ...person1,
}
person2.name = "Mizba" // no problem
//no problem
// person2.address = {
//     city: "Chottogram",
//     code : 400
// }

// person2.address.city = "Chottogram"; // changes the original also

//safe 
person2.address = {
    ...person1.address,
    city: "Chottogram"
}
console.log(person1, person2);





// using immer 
const student1 = {
    name : "Nadim",
    address: {
        upazila: "Chilmari",
        zila: "Kurigram"
    }
}
const student2 = produce(student1, (draft) => {
    draft.name = "Jishi",
    draft.address.upazila = "Savar",
    draft.address.zila = "Dhaka"
})


console.log(student1);
console.log(student2);