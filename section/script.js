const acc = document.querySelectorAll(".accordion");
const panelText = document.querySelectorAll(".panelText");

for(i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var panelText = this.nextElementSibling;
        if (panelText.style.display === "block"){
            panelText.style.display = "none";
        }else{
            panelText.style.display = "block";
        }
    })
}