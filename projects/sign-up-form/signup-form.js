const form = document.querySelector(".form-section");
const signupButton = document.querySelector("input[type='submit']");
const passwordInput = form.querySelector("input[id='password']");
const passwordConfirmInput = form.querySelector("input[id='passwordConfirm']");

signupButton.addEventListener('click', onSubmit);
passwordInput.addEventListener('input', checkPasswordSame);
passwordConfirmInput.addEventListener('input', checkPasswordSame);

let passwordIdentical=false;

function checkPassword(event){
    if (passwordInput.matches(':invalid') || passwordConfirmInput.matches(':invalid')) {
        //passwordIdentical=false;
        passwordAddError();
        // console.log("passwords are invalid");
        return;
    };
    passwordRemoveError();
    checkPasswordSame();
};

function checkPasswordSame() {
    if(passwordInput.value.toString() === passwordConfirmInput.value.toString()){
        passwordIdentical = true;
        passwordRemoveError();
        passwordInput.parentElement.setAttribute("error-message", "");
        //console.log("passwords are the same");
    } else {
        passwordIdentical = false;
        passwordAddError();
        passwordInput.parentElement.setAttribute("error-message", "* passwords must be identical");
        //console.log("passwords must be same");
    };
}

function passwordAddError() {
    passwordInput.classList.add('error');
    passwordConfirmInput.classList.add('error');

};

function passwordRemoveError() {
    passwordInput.classList.remove('error');
    passwordConfirmInput.classList.remove('error');

};

function onSubmit(event){
    checkPassword();
    //if(!validateInputs()) {
    if (!passwordIdentical) {
        event.preventDefault();
        console.log("passwords must be same");
        return;
    };
};

// function validateInputs() {
//     const formRows = form.querySelectorAll('.form-row');
//     formRows.forEach(formRow => {
//         const formInput = formRow.querySelector('input');
//         //check values
        
//         //check requireds
//         if (formInput.hasAttribute('required')) {
//             if (formInput.value == "") {
//                 formInput.classList.add('error');
//                 //return false;
//             }
//         }

//         const inputID = formInput.getAttribute("id");

//         /* //phone number check
//         if (inputID == "phone-number") {
//             if (formInput.value.length != 8) {
//                 formInput.classList.add('error');
//                 console.log("phone number should be 8 digits")
//                 //return false;
//             };
//         } */

//         //password check same
//         /* else */ if (inputID == "password") {
//             const confirmPasswordInput = form.querySelector('.form-row>input[name="userPasswordConfirm"]');
//             console.log(formInput.value.toString());
//             console.log(confirmPasswordInput.value.toString());
//             if (formInput.value.toString() !== confirmPasswordInput.value.toString()) {
//                 formInput.classList.add('error');
//                 confirmPasswordInput.classList.add('error');
//                 console.log("passwords must be same");
//                 //return false;
//             }
//         }

//     });
// }