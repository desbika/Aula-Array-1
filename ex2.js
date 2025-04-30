const prompt = require("prompt-sync")();

const numeros = [10, 20, 30, 40, 50, 60 ,70 ,80 ,90, 100];
let soma = 0;

for (let i = 0; i < 10; i++) {
    soma += numeros[i];
}

const media = soma / 10;
console.log("Média dos valores:", media);