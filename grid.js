const charater = document.getElementById("charater");
const block = document.getElementById("block");

var counter = 0;

function jump(){
    if(charater.classList== "animate"){return};
    charater.classList.add("animate");

    setTimeout(function(){
        charater.classList.remove("animate")
    },300)
};

const checkDead = setInterval(function(){
    let charaterTop = parseInt(window.getComputedStyle(charater).getPropertyValue("top"));
    let blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockleft<20 && blockleft>-20 && charaterTop>=130){
        block.style.animation = "none";
        alert("game over . score" +Math.floor(counter/100));
        counter = 0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("score").innerHTML= Math.floor(counter/100)
    }
}, 10);