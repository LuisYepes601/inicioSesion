// Manejar login con Flask
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
          });
      });