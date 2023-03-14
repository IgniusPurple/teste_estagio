let entrada = "Você vera essa string invertida abaixo"; // string a ser invertida
let saida = "";

// percorre a string de trás para frente, concatenando cada caractere na variável de saída
for (let i = entrada.length - 1; i >= 0; i--) {
  saida += entrada[i];
}

console.log("Entrada: " + entrada); // exibe a string de entrada
console.log("Saída: " + saida); // exibe a string invertida
