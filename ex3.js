const numeros = [5, -3, 8, -1, 0, 12, -7, 4, 6, -2];
let negativos = 0;
let somaPositivos = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 0) {
        negativos++; 
    } else {
        somaPositivos += numeros[i]; 
    }
}

console.log("Quantidade de números negativos:", negativos);
console.log("Soma dos números positivos:", somaPositivos);
