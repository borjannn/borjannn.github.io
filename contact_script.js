const form = document.querySelector("form");
const fullName=document.getElementById("name");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const subject=document.getElementById("subject");
const message=document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br>
Email:${email.value}<br> Message: ${message.value}<br>`
    Email.send({
        SecureToken :"924f4109-0b02-4060-8623-d29a1544c074",
        To : 'boro.malerot@gmail.com',
        From : "boro.malerot@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {

            if(message == "OK") {
                Swal.fire({
                    title: "Thank You For Contacting Me!",
                    text: "Email Successfully Sent!",
                    icon: "success"
                });
            }
        }
    );
}

function checkInput(){
    const items = document.querySelectorAll(".item");
    for(const item of items) {
        if(item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        if(items[1].value != "") {
            checkEmail();
        }
        items[1].addEventListener("keyup", ()=> {
            checkEmail();
        });
        item.addEventListener("keyup", ()=>{
            if(item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })
    }
}

function checkEmail() {
    const emailRegex =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const errorTxtEmail = document.querySelector(".error-text.email");


    if(!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");
        if(email.value != "")
        {
            errorTxtEmail.innerText = "Enter a valid email address";
        }
        else {
            errorTxtEmail.innerText ="Email can't be blank";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    checkInput();

    if(!fullName.classList.contains("error") && !email.classList.contains("error")
    &&!phone.classList.contains("error") &&!subject.classList.contains("error")
    && !message.classList.contains("error")) {
        sendEmail();
        form.reset();
        return false;
    }
});