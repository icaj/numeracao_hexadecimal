let resultado = true;

function limparTela() {
    document.getElementById('display').innerText = '0';
    resultado = false;
}

function digito(value) {
    if(resultado)
        limparTela();

    const display = document.getElementById('display');
    if (display.innerText === '0x0' || display.innerText == '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function converteHexa() {
    const display = document.getElementById('display');
    numero = parseFloat(display.textContent);
    display.innerText = numero.toString(16).toUpperCase();
    display.innerText = "0x" + display.innerText;
    resultado = true;
}
