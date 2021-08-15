const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const images = document.querySelector(".carousel-container").children;
const total = images.length;

let index = 0;

prev.addEventListener('click', function(){
    nextImg("next")
});

prev.addEventListener('click', function(){
    nextImg("prev")
});

function nextImg(direction){
    if(direction == "next"){
        index ++;

        if(index == total){
            index = 0
        }
    }else{
        if(index ==0){
            index = total -1;
        }else{
            index --;
        }   
    }

    for(let i = 0; i =images.length; i++){
        images[i].classList.remove("main"); 
    }

    images[index].classList.add("main")
}

