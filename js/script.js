const emailInputEl = document.getElementById("emailInput");
const submitBtn = document.getElementById("submit");
const errorMessageEl = document.getElementById("errorMessageEl");
const errorIcon = document.getElementById("errorIcon");

submitBtn.addEventListener("click", function(){
    checkEmail(emailInputEl.value);
});

function checkEmail(email){
    // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const validFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(validFormat)){
        console.log(`The email ${email} is valid`);
        if (!errorIcon.classList.contains('hidden')){
            errorIcon.classList.add('hidden');
            errorMessageEl.innerText = '';
        };
        if (emailInputEl.classList.contains('invalid')){
            emailInputEl.classList.remove('invalid');
        }

    } else {
        console.log(`The email ${email} is invalid`);
        errorIcon.classList.remove('hidden');
        errorMessageEl.innerText = "Please provide a valid email address";
        emailInputEl.classList.add('invalid');
    };
};