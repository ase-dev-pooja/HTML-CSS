var email = document.getElementById("Email");
var contact = document.getElementById("Contact");
var password = document.getElementById("Password");
var form = document.getElementById("form");
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log("================")
// })
function validate() {
    console.log("===========")
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailVal = email.value;
    if (emailVal == "") {
        document.getElementById("p_email").innerHTML = "Please enter valid email!!!"
    }
    else if (!re.test(String(emailVal).toLowerCase())) {
        document.getElementById("p_email").innerHTML = "Please enter valid email!!!"
    } else {
        document.getElementById("p_email").innerHTML = ""
    }

    const pattern_contact = /^[0-9]{10}/;
    const contactVal=contact.value;
    if (isNaN(contactVal) || contactVal == "") {
        document.getElementById("p_contact").innerHTML = "Please enter number!!!"
    }
    else if (!(pattern_contact.test(contactVal))) {
        document.getElementById("p_contact").innerHTML = "Please enter valid contact number!!!"
    }
    else {
        document.getElementById("p_contact").innerHTML = ""
    }

    const passwordVal=password.value;
    if (passwordVal.length < 8 || passwordVal == "") {
        document.getElementById("p_password").innerHTML = passwordVal + "Password length must be greater than 8 characters!!!"
    }
    else {
        document.getElementById("p_password").innerHTML = ""
    }
}