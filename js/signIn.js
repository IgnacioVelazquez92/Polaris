//simulando base de datos
const users =[
  {
    id: 1,
    nombre: "ignacio",
    apellido: "velazquez",
    email: "ignaciov92@gmail.com",
    password:"prueba123"
  },
  {
    id: 2,
    nombre: "laura",
    apellido: "crespo",
    email: "lauracrespo791@gmail.com",
    password:"prueba123"
  },
  {
    id: 3,
    nombre: "aurora",
    apellido: "velazquez",
    email: "aurorita@gmail.com",
    password:"prueba123"
  },
  {
    id: 4,
    nombre: "nicolas",
    apellido: "chaves",
    email: "nicochaves@gmail.com",
    password:"prueba123"
  }
]

let id = users.length
let usersJson = JSON.stringify(users)
window.localStorage.setItem("users",usersJson)

//unirse 
const userSignIn = () => {
  const nombre = document.formSignIn.nombre.value.toLowerCase();
  const apellido = document.formSignIn.apellido.value.toLowerCase();
  const emailSignIn = document.formSignIn.emailSignIn.value.toLowerCase();
  const passSignIn = document.formSignIn.passSignIn.value

  const emailValidation=/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  
  if (!emailValidation.test(emailSignIn)) {
    alert("el mail no tiene un formato correcto, vuelve a intentar")
    return
  } else {
    if (passSignIn=="" || nombre=="" || apellido=="" ) {
      alert("Los campos deben estar completos")
      return
    } else {
      let userFlag=false;
      users.map(user=>{
        if (user.email.toLowerCase() ===emailSignIn) {
          userFlag=true;
        }
      })
      if (userFlag) {
        alert(
          "El mail ingreso ya se encuentra registrado"
        )
        return
      } else {
        alert("registro exitoso, ahora logueate")
        
        users.push({
          id: id+1,
          nombre: nombre,
          apellido: apellido,
          email: emailSignIn,
          password:passSignIn
      })
      usersJson = JSON.stringify(users)
      window.localStorage.setItem("users",usersJson)
      window.location="../pages/login.html"
      }
      
    }
  }
}