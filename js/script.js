// Manejar login con Flask/*
/*
$("#loginForm").on("submit", function (e) {
  e.preventDefault();

  const username = $("#username").val();
  const password = $("#password").val();

  fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        // Redirigir según el rol
        switch (data.rol) {
          case "cliente":
            window.location.href = "/tienda.html";
            break;
          case "mesero":
            window.location.href = "/mesero.html";
            break;
          case "cocinero":
            window.location.href = "/cocinero.html";
            break;
          case "admin":
            window.location.href = "/admin.html";
            break;
          default:
            $("#loginError")
              .text("Rol desconocido")
              .removeClass("d-none");
        }
      } else {
        $("#loginError").text(data.message).removeClass("d-none");
      }
    })
    .catch((err) => {
      console.error("Error en login:", err);
      $("#loginError")
        .text("Error de conexión con el servidor")
        .removeClass("d-none");
    }); var usuario = document.getElementById("username").value;
    
});*/









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

addEventListener("DOMContentLoaded", validarCamposLogin())
