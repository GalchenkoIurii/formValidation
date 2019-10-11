let form = document.getElementById('custom-form'),
    loginField = document.querySelector('input[name="login"]'),
    passwordField = document.querySelector('input[name="password"]'),
    password2Field = document.querySelector('input[name="password2"]'),
    submit = document.querySelector('button[name="submit"]'),
    loginString, passwordString, password2String, loginValidationMessage, passwordValidationMessage;

// new RegExp("");
const loginValidationRule = /[a-z]/gi;
const passwordValidationRule = [/[0-9]/, /[a-z]/, /[A-Z]/];

form.addEventListener('submit', function (event) {
    event.preventDefault();
    loginString = loginField.value;
    passwordString = passwordField.value;
    password2String = password2Field.value;

    let loginValidationResult = loginValidation(loginString, loginValidationRule);
    let passwordValidationResult = passwordValidation(passwordString, password2String, passwordValidationRule);


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
