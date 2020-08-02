const button = document.querySelector('.button');
const header = document.getElementById('header1');

const changeText = () => {
  if(header.textContent === "This is a good day") {
    header.innerHTML = "No it is a great day!";
  } else {
    header.innerHTML = "This is a good day";
  }
}

button.addEventListener('click', changeText);
