const tabContent = document.querySelectorAll(".tab");
const tabButton = document.querySelectorAll(".tabButton");

function showTabs(tabsIndex){

    tabContent.forEach(function(show){
        show.style.display = "";
    })
    tabContent[tabsIndex].style.display = "block";
}

showTabs(0)