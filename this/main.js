// // this reference to the object that is executing the current function

// const user = {
//     name: 'Damilare',
//     age: 16,
//     married: false,
//     purchases: ['car', 'gameHouse', 'house', 'laptops'],

//     sayName: function(){
//         console.log(this.name)
//     }
// }
// user.sayName()

// function sayage(){
//     console.log(`my name is ${this}`)
// }

// sayage()


const demo = document.getElementById("demo");

function name(){
    console.log(this.demo)
}

name()