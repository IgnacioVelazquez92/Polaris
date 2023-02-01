if (!localStorage.getItem("userLog")) {
  window.location= "../pages/login.html";
}

const closeSesion= ()=>{
  localStorage.removeItem("userLog");
  window.location="../pages/login.html";
}
const userLogin = JSON.parse(localStorage.getItem("userLog"))
console.log(userLogin)
document.getElementById("loginUser").innerText=`🚀${userLogin.nombre.toUpperCase()} ${userLogin.apellido.toUpperCase()}`;
