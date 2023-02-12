// Obter o parâmetro de resultado da URL.
const urlParams = new URLSearchParams(window.location.search);
const result = decodeURIComponent(urlParams.get("result"));

// Atualiza o resultadoelemento  com o resultado.
const resultElement = document.getElementById("result");
resultElement.innerText = result;

//Funcao para voltar ao inicio
function goToIndex() {
  window.location.href = "index.html";
}
