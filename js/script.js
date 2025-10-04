async function validarCredenciales() {

  var usuario = document.getElementById("username").value;

  if (usuario == null) {
    return;
  }

  var password = document.getElementById("password").value;

  if (password == null) {

    return;
  }

  const response = await fetch("http://localhost:8080/login/iniciarSesion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      correo: usuario,
      contrasenia: password
    })

  })

  const data = await response.json();


  if (response.status !== 200) {

    let tarjeta = document.querySelector(".tarjeta-notificacion ");

    if (tarjeta == null) {
      return;
    }
    tarjeta.style.backgroundColor = "#f66666";
    mostrarNotificacion(JSON.stringify(data.Error))
  }

  if (response.status === 200) {

    mostrarNotificacion(JSON.stringify(data.Mensaje));
    tarjeta.style.backgroundColor = "#4caf50";
  }

}


let btnPrimary = document.querySelector(".btn-primary");
btnPrimary.addEventListener("click", () => {

  validarCredenciales()
})





function mostrarNotificacion(mensaje) {

  let tarjeta = document.querySelector(".tarjeta-notificacion ");

  if (tarjeta == null) {
    return;
  }

  tarjeta.innerHTML = mensaje;
  tarjeta.style.display = "block";

  setTimeout(() => {
    tarjeta.style.display = "none";
  }, 5000);

}

function validarCamposLogin() {

  let btnPrimary = document.querySelector(".btn-primary");

  if (btnPrimary == null) {
    return;
  }

  btnPrimary.addEventListener("click", (e) => {
    e.preventDefault();

    var usuario = document.getElementById("username").value;

    if (usuario === "") {
      mostrarNotificacion("El campo usuario no puede estar vacio, le inivitamos a rellenar la credencial."
        + "Por ejemplo: Usuario: yepesluis006@gmail.com");
      return;
    }


    var password = document.getElementById("password").value;

    if (password === "") {
      mostrarNotificacion("El campo contraseña no puede estar vacio. Le invitamso a rellenarlo, "
        + "Por ejemplo: Contraseña: Luis4578#");
      return;
    }
  })
}

addEventListener("DOMContentLoaded", validarCamposLogin)
