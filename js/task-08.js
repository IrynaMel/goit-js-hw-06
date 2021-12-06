const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit )

function onFormSubmit(event){
    event.preventDefault();


const formDatas = new FormData(event.currentTarget);
const formElements = event.currentTarget.elements;
const email = formElements.email.value;
const password = formElements.password.value;

if (!email || !password){
    alert('All fields must be filled')
}
 const formData = {
            email,
            password};
                        
    console.log(formData);
    form.reset()

}
 