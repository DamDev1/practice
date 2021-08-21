const inputKey = document.getElementById("inputKey");
const inputValue = document.getElementById("inputValue");
const btnInsert = document.querySelector(".btnInsert");
const output = document.querySelector(".output");


btnInsert.addEventListener("click", function(){
    const key = inputKey.value;
    const value = inputValue.value;

    if(key && value){
        localStorage.setItem(key, value);
        location.reload();
    }

});

for(let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i)
    const value = localStorage.getItem(key);

    output.textContent = `${key}: ${value}`;
}
