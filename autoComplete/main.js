const y = [
    "Damilare",
    "Opeyemi",
    "Samuel",
    "Boluwatife",
    "Tomiwa",
    "Sejiro",
    "Janet",
    "Funmilayo",
    "Setonji",
    "Ajasa"
];


var p = document.createElement("p").innerHTML = "hello World"

var peopleName = y.length;

function show(value){
    document.getElementById("datalist").innerHTML = "";
    list = value.length;
    for(let i = 0; i < peopleName; i++){
        if(((y[i].toLowerCase()).indexOf(value.toLowerCase())) >-1){
            var n = document.createElement("option");
            var v = document.createTextNode(y[i]);
            n.appendChild(v);
            document.getElementById("datalist").appendChild(    n);
        }
    }
}
