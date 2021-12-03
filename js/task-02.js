const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.map((ingredient) => {
const element= document.createElement('li');
element.textContent = ingredient;
element.classList.add('item');
return element})

const list = document.querySelector('#ingredients');
console.log(...elements)
list.append(...elements);

