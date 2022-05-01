// Nombre de validaciones
var email = document.getElementById("email");
console.log("email", email)
var password = document.getElementById("password");
console.log("password", password)
var login = document.getElementById("btn-login");
console.log("btn-login", login)


// Eventos
email.addEventListener("blur", emailBlur);
email.addEventListener("focus", emailFocus);
password.addEventListener("blur", passwordBlur);
password.addEventListener("focus", passwordFocus);
//login.addEventListener("click", loginClick);

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

//Alertas
function loginClick(){
    if (!emailValidateModal) {
        alert("Error: Email: " + email.value);
    } else if (!passwordValidateModal) {
        alert("Error: Password: " + password.value);
    } else if (emailValidateModal && passwordValidateModal) {
        alert("Login successful! \nEmail: " + email.value + "\nPassword: " + password.value);
    }
}


// Semana-07
fetch("https://basp-m2022-api-rest-server.herokuapp.com/login?" + "email=" + email.value + "&password=" + password.value)
.then(function(response){
    return response.json
})





























/*function getData(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var email = new Promise((resolve, reject) =>{
        if (email ="rose@radiumrocket.com"){
            resolve(" Email loaded!");
        }else{
            reject(" Wrogn email");
        }
    });
    email
    .then(res =>{
        console.log("Succses:" + res);
        alert("Succses:" + res);
    })
    .catch(error =>{
        console.log("Error:" + error);
        alert("Error" + error); 
    });
}*/

/*var user = [{
    id: 1,
    email: "rose@radiumrocket.com"
}];
var pass = [{
    id: 2,
    password: "BaSP2022"
}];

function getData(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var obtenerUser = id =>{
        return new Promise ((resolve, reject)=>{
            if(user.find(user => user.id)){
                resolve("Correct email!");
            } else{
                reject("User not found!");
            }
        });
    }
};
obtenerUser(1)
.then(res=>{
    console.log(res)
})
.catch(error=>{
    console.log(error)
})*/


