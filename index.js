const form = document.getElementById('form');
const email = document.getElementById('email');
const date = document.getElementById('date');
const password = document.getElementById('password');


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-message');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
    console.log(message);
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-message');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const isNumeric = (value) => {
    const regexForNumeric = /^(0|[1-9][0-9]*)$/;
    return regexForNumeric.test(Number(value));
};

const validateInputs = () => {
    const emailValue = email.value.trim();
    const dateValue = date.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue === ''){
        setError(email, 'Email is required');
    }else if(!isValidEmail(emailValue)) {
        setError(email, 'Please add valid email address');
    }else{
        setSuccess(email);
    }

    if (dateValue === "") {
        setError(date, "Date is required");
      } else if (dateValue <= 0 || dateValue > 31) {
        setError(date, "Please enter a valid date");
      } else {
        setSuccess(date);
      }

    if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (!isNumeric(passwordValue)) {
    setError(password, "Password must have a numeric value");
  } else {
    setSuccess(password);
  }

};


