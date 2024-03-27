// Função para alterar a cor de fundo ao selecionar uma opção de cor
document.getElementById('color-select').addEventListener('change', function() {
  var selectedColor = this.value;
  document.body.style.backgroundColor = selectedColor;
});
