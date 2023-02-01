const userLogin = JSON.parse(localStorage.getItem("userLog"))
console.log(userLogin)


let perfil = document.getElementById("formPerfil");
perfil.innerHTML=`
<div class="mb-3">
<label for="perfilNombre" class="form-label">Nombre</label>
<input type="text" class="form-control" id="perfilNombre" value="${userLogin.nombre}" >
</div>
<div class="mb-3">
<label for="PerfilApellido" class="form-label">Apellido</label>
<input type="email" class="form-control" id="PerfilApellido" value="${userLogin.apellido}">
</div>
<div class="mb-3">
<label for="perfilBtn" class="form-label">Correo electrónico</label>
<input type="email" class="form-control" id="perfilBtn" value="${userLogin.email}">
</div>
<div class="col-auto">
<button type="submit" class="btn btn-dark mb-3 col-12">Guardar Cambios</button>
</div>
`