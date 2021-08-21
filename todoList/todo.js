const button = document.querySelector(".todo");

button.addEventListener("click", function(){
    const input = document.querySelector(".input").value;
    const ul = document.querySelector(".liContainer");

    const li = document.createElement("li");
    ul.append(li);
    li.appendChild(document.createTextNode(input));

    const span = document.createElement("span");
    li.append(span);
    span.appendChild(document.createTextNode("\u00D7"))

    li.addEventListener("click", function(){
        li.classList.toggle("active");
    })

    span.addEventListener("click", function(){
        li.style.display = "none"
    })

    document.getElementById("input").value = "";
})