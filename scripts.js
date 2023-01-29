const pwd = document.getElementById("password");
const pwdCon = document.getElementById("password-confirmation");

pwd.addEventListener("keydown", () => {
  if (pwd.classList.contains("valid")){
    return;
  } else {
    pwd.classList.add("valid");
  }
})

pwdCon.addEventListener("keyup", () => {
  if (pwdCon.value != pwd.value){
    if (pwdCon.classList.contains("valid")){
      pwdCon.classList.remove("valid");
      pwdCon.classList.add("invalid");
    } else {
      if (pwdCon.classList.contains("invalid")) {
        return;
      } else {
        pwdCon.classList.add("invalid");
      }
    }
  } else {
    if (pwdCon.classList.contains("invalid")){
      pwdCon.classList.remove("invalid");
      pwdCon.classList.add("valid");
    } else {
      pwdCon.classList.add("valid");
    }
  }
})

const modalTrigger = document.getElementById("password-moreinfo");




