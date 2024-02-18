function run() {
const input = document.getElementById('input__texto');
const output = document.getElementById('output__texto');
const botaoCopiar = document.getElementById('botaoCopiar');



const encryptButton = document.getElementById('criptografar');
encryptButton.addEventListener('click',() => criptografarTexto(input, output));

const descryptButton = document.getElementById('descriptografar');
descryptButton.addEventListener('click', () => descriptografarTexto(input, output))

botaoCopiar.addEventListener('click', () => copyText(output))

changeCharToLowercase(input)

toggleButtonVisibility(botaoCopiar, false);
toggleTextAreaVisibility(output , false)


}

//=====================================================//
//Validar entradas de texto - sem caracteres especias

const capturarCaracteresNaoPermitidos = (text) => {
  const invalidChars = /\W|_/;
  const contemCaracter = invalidChars.test(text)

  if(contemCaracter){
    resultMessage("Caracteres especiais não são permitidos");
  } else{
    resultMessage("Apenas letras minuscula e sem acento")
  }

  return contemCaracter
}

const capturarNumerosNaoPermitidos = (text) => {
  const invalidNumeros = /[^a-zA-Z]/g;
  const contemNumeros = invalidNumeros.test(text)

  if(contemNumeros){
    resultMessage("Números não são permitidos");
  } else{
    resultMessage("Apenas letras minuscula e sem acento")
  }

  return contemNumeros
}


const changeCharToLowercase = input => {
  input.addEventListener('input',  ev => {
    const text = ev.target.value;
    ev.target.value = text.toLowerCase()
  })
}

//=====================================================//
// Função principal para criptografar 
const criptografarTexto = (input, output) => {
  const texto = input.value;
  
  if (!capturarCaracteresNaoPermitidos(texto) && texto !== '' && !capturarNumerosNaoPermitidos(texto)) {
    
  
  const resultadoCriptografia = texto
    .replace(/e/g, 'enter') 
    .replace(/i/g, 'imes') 
    .replace(/a/g, 'ai') 
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat')

    toggleButtonVisibility(botaoCopiar , true)
    toggleTextAreaVisibility(output , true)
    viewInfos(textElements , false)

    
    output.value = resultadoCriptografia;

  } else {
    output.value = ''
    toggleButtonVisibility(botaoCopiar , false)
    toggleTextAreaVisibility(output , false)
    viewInfos(textElements , true)
  }
  };

// //=====================================================//
// // Função principal para descriptografar 
function descriptografarTexto(input, output){
  const saida = input.value
  const specialWordRegex = /ai|enter|imes|obter|ufat/g;
  const resultadoDescriptografia = saida
  .replace(/enter/g, 'e')
  .replace(/imes/g, 'i')
  .replace(/ai/g, 'a')
  .replace(/ober/g, 'o')
  .replace(/ufat/g, 'u');

  const isEncrypted = specialWordRegex.test(input.value);

  if (isEncrypted) {
  output.value = resultadoDescriptografia;
  } else {
    toggleButtonVisibility(botaoCopiar , false)
    toggleTextAreaVisibility(output , false)
    viewInfos(textElements , true)
  }

};



const toggleButtonVisibility = (button, isView) =>
  isView ? (button.style.display = 'block') : (button.style.display = 'none');
  

const copyText = (output) => navigator.clipboard.writeText(output.value);

const resultMessage = (msg) => document.getElementById('msg').innerHTML = msg;

const toggleTextAreaVisibility = (textarea, isView) =>
  isView ? (textarea.style.display = 'block') : (textarea.style.display = 'none');

const viewInfos = (textElements, isView) => {
  if (isView) {
    textElements.style.visibility = 'visible';
  } else {
    textElements.style.visibility = 'hidden';
  }
};

run()