function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("#controls input");
const createboxBtn = document.querySelector('button[data-create]');
const deleteboxBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector("#boxes");

let amount = 0;

function inputChange(e)  {
  const { value } = e.target;
  amount = Number(value);
  
};
input.addEventListener("input", inputChange);

let baseboxSize = 30;

function createBoxes (e) {
  for (let i = 0; i < amount; i+=1) {
    baseboxSize += 10;
    const newBox = document.createElement("div");
    newBox.style.background = getRandomHexColor();
    newBox.style.height = baseboxSize + "px";
    newBox.style.width = baseboxSize + "px";
    newBox.style.margin = "10px";
    newBox.classList.add("new-box");
    boxes.append(newBox);
  }
};

createboxBtn.addEventListener("click", createBoxes);

function deleteBoxes (e)  {
  boxes.innerHTML = ""; 
  input.value = "";
  baseboxSize = 30;
};

deleteboxBtn.addEventListener("click", deleteBoxes);





