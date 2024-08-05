document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const campoA = document.getElementById('campoA').value;
    const campoB = document.getElementById('campoB').value;
    const message = document.getElementById('message');
    
    if (Number(campoB) > Number(campoA)) {
        message.textContent = 'Formulário válido! O número B é maior que o número A.';
        message.style.color = 'green';
    } else {
        message.textContent = 'Formulário inválido! O número B deve ser maior que o número A.';
        message.style.color = 'red';
    }
});
