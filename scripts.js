const inputText = document.getElementById('input-text');

inputText.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.keyCode === 13) {
    document.getElementById('btn-result').click();
  }
});

let action = 'encrypt'; // Variável global para armazenar a ação atual (criptografar ou descriptografar)

function toggleButton(buttonId) {
  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.classList.remove('active');
  });

  document.getElementById(buttonId).classList.add('active');

  action = buttonId === 'btn-encrypt' ? 'encrypt' : 'decrypt';
}

function getResult() {
    const inputText = document.getElementById('input-text').value;
    let outputText = '';

    if (action === 'encrypt') {
        outputText = encrypt(inputText, 3); // Usando um deslocamento de 3 posições para cifrar
    } else {
        outputText = decrypt(inputText, 3); // Usando um deslocamento de 3 posições para decifrar
    }

    // Exibir o resultado no textarea de saída
    document.getElementById('output-text').value = outputText;
}

// Função de criptografia
function encrypt(text, shift) {
    const alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const accents = 'áéíóúãõâêîôûàèìòùäëïöüç';

    const fullAlphabet = alphabetLower + alphabetUpper + numbers + accents;
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let index = fullAlphabet.indexOf(char);

        if (index !== -1) { // Se o caractere estiver no alfabeto
            let newIndex = (index + shift) % fullAlphabet.length;
            if (newIndex < 0) newIndex += fullAlphabet.length; // Garante que newIndex seja positivo
            result += fullAlphabet[newIndex];
        } else {
            result += char; // Se não estiver no alfabeto, mantém o caractere original
        }
    }

    return result;
}

// Função de descriptografia
function decrypt(text, shift) {
    const alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const accents = 'áéíóúãõâêîôûàèìòùäëïöüç';

    const fullAlphabet = alphabetLower + alphabetUpper + numbers + accents;
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let index = fullAlphabet.indexOf(char);

        if (index !== -1) { // Se o caractere estiver no alfabeto
            let newIndex = (index - shift) % fullAlphabet.length;
            if (newIndex < 0) newIndex += fullAlphabet.length; // Garante que newIndex seja positivo
            result += fullAlphabet[newIndex];
        } else {
            result += char; // Se não estiver no alfabeto, mantém o caractere original
        }
    }

    return result;
}

