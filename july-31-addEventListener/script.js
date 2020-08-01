//This code was tested using html live browser to showcase a super simple example of an event listener

const addText = () => {
   let paragraph = document.querySelector('.paragraph');
   paragraph.textContent = "Your life has now been changed, go forth and code!"
}

document.querySelector('.button').addEventListener('click', addText)
