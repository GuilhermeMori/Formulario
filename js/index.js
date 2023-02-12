// Verificar os valores digitados no formulario
function validateForm() {
  const fullName = document.getElementById("full-name").value; // obtém o valor do campo de entrada de texto com o ID "full-name"
  const phone = document.getElementById("phone").value; // obtém o valor do campo de entrada de texto com o ID "phone"
  const email = document.getElementById("email").value; // obtém o valor do campo de entrada de texto com o ID "email"
  const number = parseInt(document.getElementById("number").value); // obtém o valor do campo de entrada de número com o ID "number" e converte para um número inteiro

  //Condições do exercicio
  var condicao1 = number % 3 === 0; // Se o numeber for divisel por 3, irá aparecer o primeiro nome da pessoa na tela result
  var condicao2 = number % 5 === 0; // Se o numeber for divisel por 5, irá aparecer o DDD digitado no campo telefone na tela result
  var condicao3 = number % 7 === 0; // Se o numeber for divisel por 7, irá aparecer o dominio de email digitado no campo email na tela result

  if (phone.length < 10) {
    // Se o número de telefone tiver menos de 10 dígitos, exibe uma mensagem de erro
    alert("Preencha o número de telefone corretamente.");
    return;
  }
  // Verifica se o "numero" atende algumas da condições do exercicio.
  let result = "";

  if (condicao1) {
    //Se codição 1 for verdadeira irá executar o código:
    result = "O primeiro nome é: " + fullName.split(" ")[0]; //I aparecer o primeiro nome da pessoa na tela result
  } else if (condicao2) {
    //Se codição 2 for verdadeira irá executar o código:
    result = " O DDD indicado é: " + phone.slice(1, 3); //Irá aparecer o DDD digitado no campo telefone na tela result
  } else if (condicao3) {
    //Se codição 3 for verdadeira irá executar o código:
    const emailDomain = email.split("@")[1]; //Irá aparecer o dominio de email digitado no campo email na tela result
    result = "O dominio de email é: " + emailDomain;
  } // Se nenhuma das condições forem verdadeira irá excutar o código:
  else {
    const nameLength = fullName.replace(/\s/g, "").length; //Contar quantas letras tem no Nome Completo excluindo os expaços
    const emailLength = email.replace(/[@.]/g, "").length; //Contar quantas letras tem no email, tirando @ e pontos.
    result = `Quantidade de letras do Nome Completo, excluindo os espaços: ${nameLength}\n Quantidade de caracteres excluindo @ e pontos do e-mail: ${emailLength}`;
    //Irá dizer Quantidade de letras do Nome Completo, excluindo os espaços e  Quantidade de caracteres excluindo @ e pontos do e-mail.
  }

  // Codifica o resultado como um componente de URI e abre uma nova janela com uma URL contendo o parâmetro de resultado.
  const encodedResult = encodeURIComponent(result); // codifica a string "result" para que possa ser enviada como parte de uma URL
  const url = `result.html?result=${encodedResult}`; // cria uma URL para a página "result.html" com um parâmetro chamado "result" contendo a string "encodedResult"
  window.open(url, "_self"); // abre a URL em uma nova janela do navegador

  return false; // retorna "false" para cancelar o comportamento padrão do evento que acionou a função.

  // Verifica se o número de telefone tem menos de 10 dígitos
}

// Função mascara de telefone
function formatPhone(input) {
  // Remove qualquer caractere que não seja um dígito
  const phoneNumber = input.value.replace(/\D/g, "");

  // Cria do formato brasileiro de telefone (XX) XXXXX-XXXX
  const formattedPhoneNumber = phoneNumber.replace(
    /(\d{2})(\d{4})(\d{4})/,
    "($1)$2-$3"
  );
  // Define o valor do input com a máscara formatada
  input.value = formattedPhoneNumber;
}

//Função Mascara para nome
$("#full-name").on("input", function () {
  var regexp = /[^a-zA-Z\s]/g; // expressão regular para permitir somente letras e espaços em branco
  if (this.value.match(regexp)) {
    // verifica se o valor atual do campo de entrada contém caracteres inválidos
    $(this).val(this.value.replace(regexp, "")); // substitui os caracteres inválidos por uma string vazia
  }
});

function lettersOnly(evt) {
  evt = evt ? evt : event;
  var charCode = evt.charCode
    ? evt.charCode
    : evt.keyCode
    ? evt.keyCode
    : evt.which
    ? evt.which
    : 0;
  if (
    charCode !== 32 && // verifica se a tecla pressionada não é um espaço em branco
    (charCode < 65 || charCode > 90) && // verifica se a tecla pressionada não é uma letra maiúscula
    (charCode < 97 || charCode > 122) // verifica se a tecla pressionada não é uma letra minúscula
  ) {
    return false; // impede a digitação do caractere pressionado
  }
  return true; // permite a digitação do caractere pressionado
}
