const button= document.getElementById("form-button");
const email= document.getElementById("email-id");
button.addEventListener("click",(e)=>
{
    e.preventDefault();
    const Email = email.value;
    if(Email==="")
    alert("Empty email provided!");
    const correct = email.value.includes("@")&&email.value.includes(".com");
    if(!correct)
    alert("Email not valid!");
    else{
        alert("Email sent!!");
    }
});