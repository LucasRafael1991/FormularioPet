document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      // Aqui você pode adicionar código para processar o formulário, como enviar dados para o servidor

      // Exibe o alerta de cadastro efetuado com sucesso
      alert("Cadastro efetuado com sucesso!");
      window.location.reload();
    });
});
