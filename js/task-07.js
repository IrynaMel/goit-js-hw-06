const inputEl = document.querySelector('#font-size-control')
const inputTex = document.querySelector('#text')

inputEl.addEventListener('input', fontSizeHandler);

function fontSizeHandler (event){
     inputTex.style.fontSize = `${inputEl.value}px`
}
console.log(inputEl.value)

