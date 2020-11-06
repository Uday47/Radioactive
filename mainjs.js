function alpha() {
    if (/^[A-Za-z]+/.test(form.inputFirstName.value)) {
        return true;
    }
    else {
        alert("Enter only alphabets");
        return false;
    }
}
function alphab() {
    if (/^[A-Za-z]+/.test(form.inputLastName.value)) {
        return true;
    }
    else {
        alert("Enter only alphabets");
        return false;
    }
}
function roll(){
    if (/[^a-zA-Z0-9 ]/.test(form.inputRollno.value)) {
        return true;
    }
    else {
        alert("Enter only alphabets and numbers");
        return false;
    }
}

function phonenumber() {

    if (/^\d{10}$/.test(form.inputphno.value)) {
        return true;
    }
    else {
        alert("need 10 numbers");
        return false;
    }
}

function validateEmail() {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}


function validate() {
    if (phonenumber() && validateEmail() && alpha() && alphab() && roll()) {
        document.getElementById("submit").disabled = false;
        return false
    }
    else {
        document.getElementById("submit").disabled = true;
        return true
    }
}

