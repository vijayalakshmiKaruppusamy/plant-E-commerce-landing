const hamburger = document.querySelector(".hamburger");
const linkoptions = document.querySelector(".linkoptions");

hamburger.addEventListener("click" , () => {
    hamburger.classList.toggle("active");
    linkoptions.classList.toggle("active");

})
document.querySelectorAll(".linknumber").forEach(n  => n .addEventListener("click" , () => {
    hamburger.classList.remove("active");
    linkoptions.classList.remove("active");
}))

function validate()
{
    var mail = document.getElementById("email").value;
    var emailcondition = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(mail.match(emailcondition))
    {
        alert(mail);
    }
    else
    {
        document.getElementById("result").innerHTML = "Invalid Email-id";
    }
}