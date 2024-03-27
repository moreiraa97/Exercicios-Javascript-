// Função para intercalar as palavras e exibir no campo resultado
function intercalarPalavras() {
  // Pegar os valores das palavras
  var palavra1 = document.getElementById('palavra1').value;
  var palavra2 = document.getElementById('palavra2').value;

  // Verificar se as palavras foram digitadas
  if (palavra1 === '' || palavra2 === '') {
    alert('Por favor, digite duas palavras.');
    return;
  }

  // Intercalar as palavras
  var resultado = '';
  var maxLength = Math.max(palavra1.length, palavra2.length);
  for (var i = 0; i < maxLength; i++) {
    if (i < palavra1.length) {
      resultado += palavra1[i];
    }
    if (i < palavra2.length) {
      resultado += palavra2[i];
    }
  }

  // Exibir o resultado no campo de resultado
  document.getElementById('resultado').value = resultado;
}

// Adicionar evento de submit ao formulário
document.getElementById('intercalarForm').addEventListener('submit', function(event) {
  event.preventDefault();
  intercalarPalavras();
});
