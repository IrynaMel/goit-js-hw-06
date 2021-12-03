const numberCategory = document.querySelectorAll(".item");
console.log("Number of categories:", numberCategory.length );
numberCategory.forEach((element) =>{
    console.log('Category:', element.firstElementChild.textContent),
    console.log('Elements:', element.children[1].children.length)

})
    
