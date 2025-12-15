// Select form and input elements
const form = document.getElementById('loginForm');
const username = document.getElementById('username');
const password = document.getElementById('password');

// Listen for form submit
form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent page refresh
  validateInputs();
});

// Validate inputs
function validateInputs() {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  // Username validation
  if (usernameValue === '') {
    setError(username, 'Username cannot be empty');
  } else {
    setSuccess(username);
  }

  // Password validation
  if (passwordValue === '') {
    setError(password, 'Password cannot be empty');
  } else if (passwordValue.length < 6) {
    setError(password, 'Password must be at least 6 characters');
  } else {
    setSuccess(password);
  }
}

// Show error message
function setError(input, message) {
  const formControl = input.parentElement; // .form-control div
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control error';
}

// Show success state
function setSuccess(input) {
  const formControl = input.parentElement; // .form-control div
  const small = formControl.querySelector('small');
  small.innerText = '';
  formControl.className = 'form-control success';
}
