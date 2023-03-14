const fs = require("fs");

// Lê o conteúdo do arquivo JSON
const rawData = fs.readFileSync(
  "././exercicio_3/faturamento_diario.json",
  "utf-8"
);

// Faz o parse do conteúdo JSON para um objeto JavaScript
const data = JSON.parse(rawData);

// Obtém o vetor de faturamento diário do objeto de dados, ignorando os dias com faturamento igual a 0
const faturamentoDiario = data.faturamentoDiario
  .filter((item) => item.valor > 0)
  .map((item) => item.valor);

// Calcula o menor valor de faturamento diário
const menorFaturamento = Math.min(...faturamentoDiario);

// Calcula o maior valor de faturamento diário
const maiorFaturamento = Math.max(...faturamentoDiario);

// Calcula a média de faturamento diário considerando apenas os dias úteis
const diasUteis = faturamentoDiario.filter((faturamento) => faturamento > 0);
const mediaMensal =
  diasUteis.reduce((total, faturamento) => total + faturamento, 0) /
  diasUteis.length;

// Calcula o número de dias em que o faturamento diário foi superior à média mensal
const diasAcimaDaMedia = faturamentoDiario.filter(
  (faturamento) => faturamento > mediaMensal
).length;

// Imprime os resultados
console.log(`Menor faturamento diário: R$${menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento diário: R$${maiorFaturamento.toFixed(2)}`);
console.log(`Média de faturamento diário: R$${mediaMensal.toFixed(2)}`);
console.log(
  `Número de dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`
);
