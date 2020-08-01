const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
console.log(button1.textContent);
console.log(button2.textContent);

let header1 = document.getElementById("header1");
let header2 = document.getElementById("header2");

console.log(header1.textContent);
console.log(header2.textContent);

const changeButton1 = () => {
      header1.textContent = "I am the greatest header that ever existed";
      console.log(header1.textContent)
}

const changeButton2 = () => {
  header2.textContent = "No I am!";
}

button1.addEventListener("click", changeButton1);
button2.addEventListener("click", changeButton2);
