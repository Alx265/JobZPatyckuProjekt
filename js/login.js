const form = document.querySelector('#login-form');
const username = document.querySelector('#user-login');
const password = document.querySelector('#user-password');


form.addEventListener('submit',(e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();

	if(usernameValue === '') {
		setError(username,'Pole login jest wymagane');
	} else {
		setSuccess(username)
	}


	if(passwordValue === '') {
		setError(password,'Pole hasło jest wymagane');
	} else {
		setSuccess(password);
	}

}

function setError(input, message) {
	const controlForm = input.parentElement;
	const small = controlForm.querySelector('small');

	small.textContent = message;

	controlForm.className = 'control-form error'
}

function setSuccess(input){
	const controlForm = input.parentElement;
	controlForm.className = 'control-form success'
}  

