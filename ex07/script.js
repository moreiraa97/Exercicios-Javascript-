document.getElementById('inverterButton').addEventListener('click', function() {
  // Armazenar os nomes digitados nos campos em um array
  var nomes = [
    document.getElementById('nome1').value,
    document.getElementById('nome2').value,
    document.getElementById('nome3').value,
    document.getElementById('nome4').value,
    document.getElementById('nome5').value
  ];

  // Inverter a ordem dos nomes no array
  nomes.reverse();

  // Preencher os campos com os nomes invertidos
  document.getElementById('nome1').value = nomes[0];
  document.getElementById('nome2').value = nomes[1];
  document.getElementById('nome3').value = nomes[2];
  document.getElementById('nome4').value = nomes[3];
  document.getElementById('nome5').value = nomes[4];
});
