
//función para loguearse
const userLogin =()=>{
  const emailLog = document.formLog.emailLog.value.toLowerCase();
  const passLog = document.formLog.passwordLog.value
  const emailValidation=/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (!emailValidation.test(emailLog)){
    alert("el mail no tiene un formato correcto")
    return
  }
  const users =JSON.parse(localStorage.getItem("users"));
  let logFlag;
  let userLog;
  users.map((user)=>{
    if (user.email.toLowerCase()===emailLog && user.password ===passLog) {
      logFlag=true;
      userLog=user;
    }
  });
  if (logFlag) {
    delete userLog.password
    localStorage.setItem("userLog",JSON.stringify(userLog))
    window.location="../index.html"
  } else {
    alert`Usuario o contraseña incorrecto`
  }
}






//función para registrarse


