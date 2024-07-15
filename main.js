const form = document.getElementById('form-validacao');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const mensagem = document.querySelector('.message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    if (valorB > valorA) {
        mensagem.textContent = `Formulário válido: O valor B (${valorB}) é maior que o valor A (${valorA}).`;
        mensagem.classList.add('success');
        mensagem.classList.remove('error');
    } else {
        mensagem.textContent = `Formulário inválido: O valor B (${valorB}) deve ser maior que o valor A (${valorA}).`;
        mensagem.classList.add('error');
        mensagem.classList.remove('success');
    }

    mensagem.style.display = 'block';
});
