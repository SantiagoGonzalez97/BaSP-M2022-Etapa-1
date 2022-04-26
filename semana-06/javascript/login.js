// Nombre de validaciones
var email = document.getElementById("email");
console.log("email", email)
var password = document.getElementById("password");
console.log("password", password)


// Validaciones
email.addEventListener("blur", emailBlur);
email.addEventListener("focus", emailFocus);
password.addEventListener("blur", passwordBlur);
password.addEventListener("focus", passwordFocus);


// Blur de validaciones
function emailBlur () {
    var emailValue = email.value;
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var respuestaExpReg = expReg.test(emailValue);
    if(respuestaExpReg){
        p = document.getElementById("emailError");
        p.classList.replace("active", "hidden");
        email.classList.remove("borderWarning");
        email.classList.add("borderSuccess");
        emailValidateModal = true;
    } else {
        var p = document.getElementById("emailError");
        p.classList.replace("hidden", "active");
        email.classList.add("borderWarning");
        emailValidateModal = false;
    }
}

function passwordBlur () {
    var passwordValue = password.value;
    var letterPassword = 0;
    var numberPasdword = 0;
    if (passwordValue.length > 7){
        p = document.getElementById("passwordErrorLength");
        p.classList.replace("active", "hidden");
        for (let i = 0; i < passwordValue.length; i++) {
            var letterPass = passwordValue.substring(i,i+1);
            let ascii = letterPass.charCodeAt();
            if (letterPass == Number(letterPass) && ascii != 32){
                numberPasdword += 1;
            }
            if (!((ascii < 65) || (ascii > 90 && ascii < 97) || (ascii > 122) && (ascii != 209 && ascii != 241))) {
                letterPassword += 1;
            }
        }
        if (letterPassword + numberPasdword === passwordValue.length){
            p = document.getElementById("passwordErrorCaracter");
            p.classList.replace("active", "hidden");
            password.classList.remove("borderWarning");
            password.classList.add("borderSuccess");
            passwordValidateModal = true;
            return checkedPW = password.value;
        } else {
            p = document.getElementById("passwordErrorCaracter");
            p.classList.replace("hidden", "active");
            password.classList.add("borderWarning");
            passwordValidateModal = false;
        }
    } else {
        var p = document.getElementById("passwordErrorLength");
        p.classList.replace("hidden", "active");
        password.classList.add("borderWarning");
        passwordValidateModal = false;
    }
}


//Focus de validaciones
function emailFocus () {
    p = document.getElementById("emailError");
    p.classList.replace("active", "hidden");
}

function passwordFocus () {
    p = document.getElementById("passwordErrorLength");
    p2 = document.getElementById("passwordErrorCaracter");
    p.classList.replace("active", "hidden");
    p2.classList.replace("active", "hidden");
}