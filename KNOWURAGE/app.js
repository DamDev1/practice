function calculate(){
    const date = document.querySelector(".date").value;
    const month = document.querySelector(".month").value;
    const year = document.querySelector(".year").value;

    const text = document.getElementById("text");

    const gd = new Date()
    const d = gd.getDate();
    const m = gd.getMonth() + 1;
    const y = gd.getFullYear();

    const disDate = d - date;
    const disMonth = m - month;
    const disYear = y - year;

    if(date == "" || month == "" || year == ""){
        alert("can't be empty")
    }else{
        text.textContent = `Your are ${disYear} Years Old, and ${disMonth} Month, and ${disDate} Days` 
    }
    
}
