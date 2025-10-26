
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


async function inciarSesion() {

  const usuario = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  Swal.fire({
    title: 'Iniciando sesión',
    text: 'Por favor espera un momento',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading(); //
    }
  });

  const response = await fetch('http://localhost:8080/login/iniciarSesion', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      correo: usuario,
      contrasenia: password
    })

  })

  const datos = await response.json();

  if (response.status == 200) {
    Swal.fire({
      title: 'Error en el servidor',
      text: 'Por favor espera un momento o intentalo nuevamente',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading(); // 
      }
    });
  }

  if (response.status == 400) {

  }

  if (response.status == 404) {
    Swal.fire({
      icon: 'error',
      title: datos.mensaje,
      text: datos.Error,
      confirmButtonText: 'Aceptar', // 
      confirmButtonColor: '#3085d6',
      allowOutsideClick: false
    });

  }

  if (response.status >= 500) {
    Swal.fire({
      icon: 'error',
      title: 'Error en el servidor',
      text: 'Por favor espera un momento o inténtalo nuevamente',
      confirmButtonText: 'Aceptar', // 
      confirmButtonColor: '#3085d6',
      allowOutsideClick: false
    });

  }

  console.log(datos);




}

const btn_enviar = document.querySelector(".btn-primary");


btn_enviar.addEventListener("click", (e) => {

  e.preventDefault();

  inciarSesion();

})



