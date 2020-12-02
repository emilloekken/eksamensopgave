const password = document.getElementById("password");
const errorElement = document.getElementById("error");
const form = document.getElementById("form");

submit.addEventListener("Submit", (e) => { 
errorElement.innerHTML = ""    
let messages = "";

if (password.value.length <= 8){
   messages += "must be longer than 8 characters\n"
}
if (password.value.length >= 15){
   messages += "must be less than 15 characters\n"
}
if (password.value === "password") {
   messages += "password cannot be password\n"
}
if (messages != "") {
e.preventdefault()
errorElement.innerHTML = messages;
}
})