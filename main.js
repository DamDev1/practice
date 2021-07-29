// var createElement = document.createElement('p');
// createElement.textContent = "Welcome Guys";
// document.body.appendChild(createElement);

// var user = prompt("Please enter your age");

// document.write("Welcome " + user + " To my boring story")
// // deleting alert 

// var demo = document.getElementById("demo")
// function delecte(){
//     if(window.confirm("Are you sure of what you are doing")){
//         demo.style.display = "none";
//     }
// }

// delect();


// Using the Switch...Case Statement
// The switch..case statement is an alternative to the if...else if...else statement
// The switch...case statement tests a variable or expression against a series of values until it finds a match, and then executes the block of code corresponding to that match.

// var name = "Damilare";

// switch(name){
//     case 1:
//         console.log("Welcome damilare");
//         break
//     case seji:
//         console.log("get out");    
//         break
//     default:
//         console.log("get out everyone");
// }


// loops


const massage = document.querySelector(".massage");
const input = document.getElementById("text");
const send = document.getElementById("send");
const clear = document.getElementById("clear");

send.addEventListener('click', passMassage);

function passMassage(){
    let textValue = input.value;
    massage.innerHTML = textValue;
}

clear.addEventListener('click', clearmassage);

function clearmassage(){
    textValue = "";
    massage.innerHTML = "";
}