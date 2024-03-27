// Função para verificar se a palavra é um palíndromo
function verificarPalindromo(palavra) {
  // Remover espaços em branco e transformar em minúsculas
  palavra = palavra.toLowerCase().replace(/\s/g, '');

  // Inverter a palavra
  var palavraInvertida = palavra.split('').reverse().join('');

  // Verificar se a palavra original é igual à palavra invertida
  return palavra === palavraInvertida;
}

// Adicionar evento de clique ao botão de verificação
document.getElementById('checkButton').addEventListener('click', function() {
  var userInput = document.getElementById('userInput').value;
  var resultMessage = document.getElementById('resultMessage');

  if (verificarPalindromo(userInput)) {
    resultMessage.textContent = '"' + userInput + '" é um palíndromo.';
  } else {
    resultMessage.textContent = '"' + userInput + '" não é um palíndromo.';
  }
});
