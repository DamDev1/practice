// const secondName = document.querySelector(".secondName");
// const secondAge = document.querySelector(".secondAge");
// const secondlorem = document.querySelector(".secondlorem");

const firstProduct = {
    name: "Damilare",
    age: 34,
    lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis officiis consequuntur architecto, distinctio, laborum natus consequatur totam consectetur maxime eveniet quis eligendi temporibus unde expedita ullam quia iure ratione numquam."
}

const secondProduct = {
    name: "Janet",
    age: 23,
    lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis officiis consequuntur architecto, distinctio, laborum natus consequatur totam consectetur maxime eveniet quis eligendi temporibus unde expedita ullam quia iure ratione numquam."
}
document.getElementById("name").innerHTML = firstProduct.name;

document.getElementById("age").innerHTML = firstProduct.age;

document.getElementById("loram").innerHTML = firstProduct.lorem;


document.querySelector("secondName").innerHTML = secondProduct.name;

document.querySelector("secondAge").innerHTML = secondProduct.age;

document.querySelector("secondlorem").innerHTML = secondProduct.lorem;
