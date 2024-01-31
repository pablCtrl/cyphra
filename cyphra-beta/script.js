// Aguarda o evento de carregamento do DOM para garantir que todos os elementos estejam disponíveis
document.addEventListener("DOMContentLoaded", function () {
  // Obtém referências aos elementos HTML necessários
  const inputText = document.getElementById("input-text");
  const outputText = document.getElementById("output-text");
  const encryptButton = document.getElementById("encrypt-button");

  // Adiciona um ouvinte de evento de clique ao botão de criptografia
  encryptButton.addEventListener("click", function () {
    // Obtém o texto original do elemento de entrada e remove espaços em branco no início e no final
    const originalText = inputText.value.trim();
    
    // Define a quantidade de deslocamento para a cifra de César (no caso, 3)
    const shiftAmount = 3;

    // Cria o texto criptografado aplicando a cifra de César
    const encryptedText = originalText
      .split("")  // Divide o texto em um array de caracteres
      .map((char) => {
        // Verifica se o caractere é uma letra do alfabeto
        if (char.match(/[a-zA-Z]/)) {
          // Obtém o código ASCII do caractere
          const asciiCode = char.charCodeAt(0);
          
          // Calcula o novo código ASCII aplicando o deslocamento
          let encryptedCode = asciiCode + shiftAmount;

          // Verifica se o novo código ultrapassou os limites das letras minúsculas e maiúsculas
          if (
            (char >= "a" && encryptedCode > 122) ||
            (char <= "Z" && encryptedCode > 90)
          ) {
            // Se ultrapassou, ajusta o código subtraindo 26 para manter dentro dos limites
            encryptedCode -= 26;
          }

          // Converte o código ASCII de volta para o caractere e retorna
          return String.fromCharCode(encryptedCode);
        } else {
          // Se não for uma letra, retorna o caractere original
          return char;
        }
      })
      .join("");  // Junta os caracteres criptografados de volta em uma string

    // Exibe o texto criptografado no elemento de saída
    outputText.value = encryptedText;
  });
});
