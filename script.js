const entradaTexto = document.getElementById("entradaDados").querySelector("textarea");
const saidaTexto = document.getElementById("saidaDados").querySelector("textarea");

const deslocamento = 3; // Define the shift for the Caesar cipher

function criptografarTexto() {
  const textoOriginal = entradaTexto.value.trim();

  const textoCriptografado = textoOriginal.split("").map(char => {

    const codigoAscii = char.charCodeAt(0);
    let codigoCriptografado = codigoAscii + deslocamento;

    if (codigoCriptografado > 122) {
      codigoCriptografado -= 26;
    }

    return String.fromCharCode(codigoCriptografado);
  }).join("");

  saidaTexto.value = textoCriptografado;
}


//Refazer isso