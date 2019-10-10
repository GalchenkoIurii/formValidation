let loginField = document.querySelector('input[name="login"]'),
    passwordField = document.querySelector('input[name="password"]'),
    password2Field = document.querySelector('input[name="password2"]'),
    submit = document.querySelector('input[name="submit"]');

// new RegExp("");
const loginValidationRule = /[a-zа-яё]/gi;
const passwordValidationRule = /[]/;

    let str = "abC7Dc@mD4арД";

console.log(str.match(loginValidationRule));