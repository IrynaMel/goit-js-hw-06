const inputRef = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

inputRef.addEventListener('input', addnameChange)

function addnameChange(event) {
    nameLabel.textContent = event.currentTarget.value;
    const inputRef = document.querySelector('#name-input');
    nameLabel.textContent = event.currentTarget.value;
    if (inputRef.value === ''){
        nameLabel.textContent = 'Anonymous'
    }
}