//setting the default slider start index
const sliderIndex = 1;

// we call the function that is implemented below
showSlide(sliderIndex)

//Decrease the index by 1 - show previous slide
function previousSilde(){
    showSlide(sliderIndex -=1)
}

//Increase the index by 1 - show next slide
function nextSilde(){
    showSlide(sliderIndex +=1)
}

//set current slide
function currentSlide(n){
    showSlide(sliderIndex = n)
}

// flip function
function showSlide(n){
    let i;
    // we refer to the element with the name "slider", that is , to the picture
    const slider = document.querySelector(".slider");

    //checking the number of slide
    if(n > slider.length){
        sliderIndex = 1
    }
    if(n < 1){
        sliderIndex = slider.length;
    }

    //loop through each slide in a for loop
    for(let slide of slider){
        slide.style.display = "none"
    }

    //making an element block
    slider[sliderIndex - 1].style.display = "block"
}
