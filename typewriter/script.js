const textArray = ["Youtuber", "Web Developer", "Progrmmer", "Developer"];
let count = 0;
let index = 0;
let currentText = '';
let letter = "";

(function type(){ 
    if(count === textArray.length){
        count = 0
    }
    currentText = textArray[count]
    letter = currentText.slice(0, ++index)

    document.querySelector(".text").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0
    }

    setTimeout(type, 200)
}());