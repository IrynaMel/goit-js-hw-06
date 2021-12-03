const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color')

buttonEl.addEventListener('click', changeColorHandler)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}; 


function changeColorHandler(event){
   document.body.style.backgroundColor =  getRandomHexColor();
   spanEl.textContent = getRandomHexColor();
}




