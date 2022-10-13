const form = document.querySelector(".form-section");
const signupButton = document.querySelector("input[type='submit']");

signupButton.addEventListener('click', onSubmit);

function onSubmit(event){
    if(!validateInputs()) {
        event.preventDefault();
        return;
    };


}

function validateInputs() {
    const formRows = form.querySelectorAll('.form-row');
    formRows.forEach(formRow => {
        const formInput = formRow.querySelector('input');
        //check values
        
        //check requireds
        if (formInput.hasAttribute('required')) {
            if (formInput.value == "") {
                formInput.classList.add('error');
                //return false;
            }
        }

        const inputID = formInput.getAttribute("id");

        //phone number check
        if (inputID == "phone-number") {
            if (formInput.value.length != 8) {
                formInput.classList.add('error');
                console.log("phone number should be 8 digits")
                //return false;
            };
        }

        //password check same
        else if (inputID == "password") {
            const confirmPasswordInput = form.querySelector('.form-row>input[name="userPasswordConfirm"]');
            console.log(formInput.value.toString());
            console.log(confirmPasswordInput.value.toString());
            if (formInput.value.toString() !== confirmPasswordInput.value.toString()) {
                formInput.classList.add('error');
                confirmPasswordInput.classList.add('error');
                console.log("passwords must be same")
                //return false;
            }
        }

    });
}