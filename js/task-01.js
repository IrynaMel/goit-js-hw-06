const numberCategory = document.querySelectorAll(".item");
console.log("Number of categories:", numberCategory.length );
console.log('Category:',numberCategory[0].firstElementChild.textContent);
console.log('Elements:', numberCategory[0].children[1].children.length);
console.log('Category:',numberCategory[1].firstElementChild.textContent);
console.log('Elements:', numberCategory[1].children[1].children.length);
console.log('Category:',numberCategory[2].firstElementChild.textContent);
console.log('Elements:', numberCategory[2].children[1].children.length);
