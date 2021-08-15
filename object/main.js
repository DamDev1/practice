const name1 = document.getElementById("name");
const age1 = document.getElementById("age");
const loram1 = document.getElementById("loram");

class display{
    constructor(name, age, loram) {
        this.name = name;
        this.age = age;
        this.loram = loram;
    }
}

const details1 = new display("Damilare", 34, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto aspernatur quos tempora ex vitae? Quibusdam voluptatum repellat deleniti, nam cumque voluptatem quod placeat tempora alias quam consectetur officiis dolore modi.");

name1.textContent = details1.name;
age1.textContent = details1.age;
loram1.textContent = details1.loram;



