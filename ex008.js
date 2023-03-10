let eleitores = 1000;
let votosBranco = 100;
let votosNulo = 300;
let votosValidos = 600;

console.log(`Total de eleitores: ${eleitores}`);
console.log("");

let percentualBranco = votosBranco / eleitores;
console.log("Votos em branco: " + percentualBranco + "%");
// Output: Votos em branco: 0.1%

let percentualNulo = votosNulo / eleitores;
console.log("Votos em nulo: " + percentualNulo + "%");
// Output: Votos em nulo: 0.3%

let percetualValido = votosValidos / eleitores;
console.log("Votos válidos: " + percetualValido + "%");
// Output: Votos válidos: 0.6%