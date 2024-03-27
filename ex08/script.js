// Selecionando elementos do DOM
const pessoaFisica = document.getElementById('pessoaFisica');
const pessoaJuridica = document.getElementById('pessoaJuridica');
const labelCpf = document.getElementById('labelCpf');
const labelCnpj = document.getElementById('labelCnpj');
const cpfInput = document.getElementById('cpf');
const cnpjInput = document.getElementById('cnpj');
const dataNascimentoInput = document.getElementById('dataNascimento');
const cepInput = document.getElementById('cep');

// Adicionando listener de mudança nos radios
pessoaFisica.addEventListener('change', toggleInputs);
pessoaJuridica.addEventListener('change', toggleInputs);

// Função para alternar visibilidade dos campos de acordo com o tipo de pessoa selecionado
function toggleInputs() {
  if (pessoaFisica.checked) {
    labelCpf.style.display = 'block';
    cpfInput.disabled = false;
    dataNascimentoInput.disabled = false;
    labelCnpj.style.display = 'none';
    cnpjInput.disabled = true;
    cepInput.disabled = false;
  } else if (pessoaJuridica.checked) {
    labelCnpj.style.display = 'block';
    cnpjInput.disabled = false;
    labelCpf.style.display = 'none';
    cpfInput.disabled = true;
    dataNascimentoInput.disabled = true;
    cepInput.disabled = false;
  }
}

// Adicionando máscara de CPF
cpfInput.addEventListener('input', function() {
  const value = this.value.replace(/\D/g, '');
  if (value.length <= 11) {
    this.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  } else {
    this.value = value.slice(0, 14);
  }
});

// Adicionando máscara de CNPJ
cnpjInput.addEventListener('input', function() {
  const value = this.value.replace(/\D/g, '');
  if (value.length <= 14) {
    this.value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  } else {
    this.value = value.slice(0, 18);
  }
});

// Adicionando máscara de CEP
cepInput.addEventListener('input', function() {
  const value = this.value.replace(/\D/g, '');
  if (value.length <= 8) {
    this.value = value.replace(/(\d{5})(\d{3})/, '$1-$2');
  } else {
    this.value = value.slice(0, 9);
  }
});
