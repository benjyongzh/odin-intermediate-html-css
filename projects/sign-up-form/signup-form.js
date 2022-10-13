const form = document.querySelector(".form-section");
const signupButton = document.querySelector("input[type='submit']");

signupButton.addEventListener('click', onSubmit);

function onSubmit(event){
    validateInputs();
}

function validateInputs() {
    const formRows = form.querySelectorAll('.form-row');
    formRows.forEach(formRow => {
        const formInput = formRow.querySelector('input');
        console.log(formInput);
    })
}