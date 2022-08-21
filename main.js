const increase = document.querySelector(".increase")
const decrease = document.querySelector(".decrease")
const inputCount = document.querySelector(".countInput")

increase.addEventListener("click", () =>{
    inputCount.value ++;

    if(inputCount.value > 0){
        inputCount.style.color = "green"
    }
})

decrease.addEventListener("click", () =>{
    inputCount.value --;

    if(inputCount.value < 0){
        inputCount.style.color = "red"
    }
})

