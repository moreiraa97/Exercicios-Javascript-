// Função para alternar entre mostrar e ocultar o parágrafo ao clicar no botão
document.getElementById('toggleButton').addEventListener('click', function() {
  var paragraph = document.getElementById('paragraph');
  if (paragraph.style.display === 'none' || paragraph.style.display === '') {
    paragraph.style.display = 'block';
    this.textContent = 'Ocultar';
  } else {
    paragraph.style.display = 'none';
    this.textContent = 'Mostrar';
  }
});
