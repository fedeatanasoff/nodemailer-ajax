$(document).ready(() => {
  console.log("funcionando");
  let form = $("#form");

  form.on("submit", e => {
    e.preventDefault();
    console.log("evento detectado");

    $.ajax({
      url: "/mail",
      method: "POST",
      // dataType: "json", => arrojaba un error con esto
      data: form.serialize(),
      beforeSend: function() {
        form.append("<h1>enviando</h1>");
      },
      success: function(data) {
        console.log(data);
        alert("mensaje enviado");
      },
      error: function(err) {
        console.log("Hubo un Error: ", err);
      }
    });
  });
});
