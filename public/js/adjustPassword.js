function viewPassword(pFieldId, eyeId) {

    var passwordInput = document.getElementById(pFieldId);
    var passStatus = document.getElementById(eyeId.id);
    
    if (passwordInput.type == 'password'){
        passwordInput.type='text';
        passStatus.className='fas fa-eye-slash';
        passStatus.title = "Hide Password"
        console.log(passStatus.title);
        
    } else{
        passwordInput.type='password';
        passStatus.className='fas fa-eye';
        passStatus.title = "Show Password"
        console.log(passStatus.title);
    }
}
function testPassword() {
    var password = document.getElementById("psw");
    var confirmPassword = document.getElementById("cpsw");

    if (password.value != confirmPassword.value) {
        password.style.backgroundColor = "red";
        confirmPassword.style.backgroundColor = "red";
    } else {
        password.style.backgroundColor = "green";
        confirmPassword.style.backgroundColor = "green";
    }

    console.log(password.value);
    console.log(confirmPassword.value);
}
