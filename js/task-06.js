const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', getValue)
function getValue (event){
    if (this.getAttribute('data-length') != this.value.length) { 
        this.classList.remove('valid');
        this.classList.add('invalid');
      } else {
        this.classList.remove('invalid');
        this.classList.add('valid');
      }

}