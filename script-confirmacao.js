document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-trabalhe");
  const fileInput = document.getElementById("myfile");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Evita envio real do arquivo

    if (fileInput.files.length === 0) {
      alert("Selecione um arquivo antes de enviar.");
      return;
    }

    // Redireciona para a página de confirmação
    window.location.href = "pagina-de-confirmacao.html";
  });
});
