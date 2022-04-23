const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input',function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(text.value)){
        textError.textContent = "";
    }else{
        textError.textContent = "Name is incorrect";
    }
});

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input',function(){
    let emailRegex = RegExp('^[abc](.+){1}[A-Za-z]*+@{1}[bl](.+)[co](.+)[in]$');
    if(emailRegex.test(email.value)){
        emailError.emailContent = "";
    }else{
        emailError.emailContent = "email format is incorrect";
    }
});
