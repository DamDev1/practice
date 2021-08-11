// const names = ["Dami", "Samuel", "Daniel", "Eliza", "Burrito", "Elija"];

// // for(i = 0; i < names.length; i++){
// //     console.log(names[i])
// // }

// for(name of names){
//     if(name == "dami"){
//         console.log("yes")
//     }else{
//         console.log("none")
//     }
// }

// const demo = document.querySelectorAll(".demo");

// for(car of demo){
//     if(car === "david"){
//         console.log("yes")
//     }else{
//         console.log("no")
//     }
// }

// const loading = 0;

// while(loading < 100){
//     console.log("hello")

//     loading ++
// }

// Map, reduce, and filter are all array methods in JavaScript.
// The map() method is used for creating an array in an existing one...applying a function to each one of the first array.

const numbers = [0, 1, 2, 3, 4];
const double = numbers.map(item => item -2);

console.log(double);


const people = [
    {
        name : "Damilare",
        age : 16,
        class: "ss2",
    },

    {
        name : "Janet",
        age : 14,
        class: "ss2",
    },

    {
        name : "David",
        age : 20,
        class: "js1",
    },

    {
        name : "Micheal",
        age : 22,
        class: "js2",
    },
];

const highAge = people.filter(people => people.age >= 16)

console.log(highAge)