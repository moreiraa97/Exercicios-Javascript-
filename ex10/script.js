// Adicionando evento de submit ao formulário
document.getElementById('numerosForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Pegando os valores dos números
  var numero1 = parseFloat(document.getElementById('numero1').value);
  var numero2 = parseFloat(document.getElementById('numero2').value);
  var numero3 = parseFloat(document.getElementById('numero3').value);

  // Verificando se os valores são números válidos
  if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    alert('Por favor, digite três números válidos.');
    return;
  }

  // Chamando uma função para processar os números (aqui você pode adicionar o processamento que deseja)
  processarNumeros(numero1, numero2, numero3);
});

// Função para processar os números (exemplo de função que apenas os imprime)
function processarNumeros(num1, num2, num3) {
  console.log('Número 1:', num1);
  console.log('Número 2:', num2);
  console.log('Número 3:', num3);
}
