let counterValue = 0

const decrementEl = document.querySelector('button[data-action="decrement"]');
decrementEl.addEventListener('click', decrement)

function decrement(){
	counterValue -=1;
    document.getElementById('value').innerHTML  = counterValue;
}

const incrementEl = document.querySelector('button[data-action="increment"]');
incrementEl.addEventListener('click', increment)

function increment(){
	counterValue += 1;
  document.getElementById('value').innerHTML = counterValue;
}