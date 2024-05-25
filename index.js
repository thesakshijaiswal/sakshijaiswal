const form = document.getElementById('form');
const email = document.getElementById('email');
const date = document.getElementById('date');
const password = document.getElementById('password');


form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const dateValue = date.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue === ''){

    }

};


