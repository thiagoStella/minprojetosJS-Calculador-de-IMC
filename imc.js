const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(2);
        
        let tipo = '';
        
        if (valorIMC < 18.5) {
            tipo = 'Abaixo do peso!';
        }else if (valorIMC < 18.5) {
            tipo = 'com o peso ideal.';
        }else if (valorIMC < 30) {
            tipo = 'um pouco acima do peso.';
        }else if (valorIMC < 35) {
            tipo = 'como obesidade de grau 1!';
        }else if (valorIMC < 40) {
            tipo = 'como obesidade de grau 2!';        
        }else {
            tipo = 'como obesidade de grau 3! Cuidado!';
        }
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e voce está ${tipo}`;
    }else {
        resultado.textContent = 'Preencha todos os campos!';
    }

}

calcular.addEventListener('click', imc);
