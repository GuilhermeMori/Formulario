// Verificar os valores digitados no formulario
function validateForm() {
  const fullName = document.getElementById("full-name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const number = parseInt(document.getElementById("number").value);

  //Condições do exercicio
  var condicao1 = number % 3 === 0;
  var condicao2 = number % 5 === 0;
  var condicao3 = number % 7 === 0;

  // Verifica se o "numero" atende algumas da condições do exercicio.
  let result = "";
  if (condicao1) {
    result = "O primeiro nome é: " + fullName.split(" ")[0];
  } else if (condicao2) {
    result = " O DD indicado é: " + phone.slice(1, 3);
  } else if (condicao3) {
    const emailDomain = email.split("@")[1];
    result = "O dominio de email é: " + emailDomain;
  } else {
    const nameLength = fullName.replace(/\s/g, "").length;
    const emailLength = email.replace(/[@.]/g, "").length;
    result = `Quantidade de letras do Nome Completo, excluindo os espaços: ${nameLength}\n Quantidade de caracteres excluindo @ e pontos do e-mail: ${emailLength}`;
  }

  // Codifica o resultado como um componente de URI e abre uma nova janela com uma URL contendo o parâmetro de resultado.
  const encodedResult = encodeURIComponent(result);
  const url = `result.html?result=${encodedResult}`;
  window.open(url, "_blank");

  return false;
}

// Função mascara de telefone
function formatPhone(input) {
  // Remove qualquer caractere que não seja um dígito
  const phoneNumber = input.value.replace(/\D/g, "");

  // Cria a máscara do telefone
  const formattedPhoneNumber = phoneNumber.replace(
    /(\d{2})(\d{5})(\d{4})/,
    "($1)$2-$3"
  );
  // Define o valor do input com a máscara formatada
  input.value = formattedPhoneNumber;

  //Mascara telefone
  $("#phone").mask("(99) 99999-9999");
}
