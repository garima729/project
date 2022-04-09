const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");

window.addEventListener("load",function(){

    showPopup();

    // simpler way
        //setTimeout(function(){
            //loginPopup.classList.add("show")
        //},1000)
})

function showPopup(){
    const timeLimit = 3 // seconds;
  let i=0;
  const timer = setInterval(function(){
      i++;
      if(i == timeLimit){
          clearInterval(timer);
          loginPopup.classList.add("show")
      }
      console.log(i)
  },1000);
}

close.addEventListener("click",function(){
    loginPopup.classList.remove("show")
})

const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const firstNameField = document.getElementById("firstname");
  let valid = true;

  if (!firstNameField.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    firstNameField.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  }
  return valid;
}

