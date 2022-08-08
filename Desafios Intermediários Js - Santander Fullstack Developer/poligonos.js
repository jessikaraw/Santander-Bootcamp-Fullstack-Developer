// A função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
let lines = gets().split("\n");
let line = lines.shift().split(' ');

//TODO: Complete os espaços em branco com uma possível solução para o desafio

let N = parseInt(line[0]);
let L = parseInt(line[1]);

let P = N * L;

if (N >= 3 && N <= 1000000 && L >= 1 && L <= 4000){
  print(P);
}