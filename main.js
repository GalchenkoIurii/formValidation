let form = document.getElementById('custom-form'),
    modal = document.getElementById('modal'),
    close = document.getElementById('close'),
    messageBox = document.getElementById('message-box'),
    loginField = document.querySelector('input[name="login"]'),
    passwordField = document.querySelector('input[name="password"]'),
    password2Field = document.querySelector('input[name="password2"]'),
    submit = document.querySelector('input[name="submit"]'),
    loginSuccessMessage = 'You have been successfully registered',
    loginString, passwordString, password2String, loginValidationMessage, passwordValidationMessage;

/*
* To fix errors, it's necessary to add a checking of the data received from the user
* for inequality to null-value and undefined-value
 */

// new RegExp("");
const loginValidationRule = /[a-z]/gi;
const passwordValidationRule = [/[0-9]/, /[a-z]/, /[A-Z]/];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    loginString = loginField.value;
    passwordString = passwordField.value;
    password2String = password2Field.value;

    let loginValidationResult = loginValidation(loginString, loginValidationRule),
        passwordValidationResult = passwordValidation(passwordString, password2String, passwordValidationRule);

    let loginMessageBox = document.createElement('p'),
        passwordMessageBox = document.createElement('p'),
        loginSuccessMessageBox = document.createElement('p');

    loginMessageBox.innerHTML = loginValidationMessage;
    passwordMessageBox.innerHTML = passwordValidationMessage;
    loginSuccessMessageBox.innerHTML = loginSuccessMessage;

    if (loginValidationResult && passwordValidationResult) {
        messageBox.append(loginSuccessMessageBox);
    } else if (loginValidationResult) {
        messageBox.append(passwordMessageBox);
    } else if (passwordValidationResult) {
        messageBox.append(loginMessageBox);
    }

    modal.style.display = "block";
});

close.addEventListener('click', function() {
    modal.style.display = "none";
});

function loginValidation(validationString, validationRule) {
    if (validationString.length === (validationString.match(validationRule)).length) {
        return true;
    } else {
        loginValidationMessage = "Login should contain only letters!";
        return false;
    }
}

function passwordValidation(firstString, secondString, validationRule) {
    if (firstString === secondString) {
        let stringValidationResult = 0;
        validationRule.forEach(function(item) {
            if (firstString.match(item)) {
                stringValidationResult++;
            }
        });

        if (stringValidationResult >= 3) {
            return true;
        } else {
            passwordValidationMessage = "Password should contain at least one digit, one small letter and one big letter";
            return false;
        }
    } else {
        passwordValidationMessage = "Entered passwords isn't equal! Entered passwords in both fields should be equal";
        return false;
    }
}
