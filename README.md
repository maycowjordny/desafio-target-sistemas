
# Desafio Target Sistemas

### 1. Sequência de Fibonacci

**Descrição:** Dada a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor é sempre a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem de sua escolha para verificar se um número informado pertence ou não à sequência.

**Resolução da questão:**

```javascript
function isFibonacci(num) {
  if (num < 0)
    return "O número informado não pertence à sequência de Fibonacci.";

  let a = 0;
  let b = 1;

  while (b < num) {
    const next = a + b;
    a = b;
    b = next;
  }

  if (b === num || num === 0) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  } else {
    return `O número ${num} não pertence à sequência de Fibonacci.`;
  }
}

const numeroInformado = 24;
const resultado = isFibonacci(numeroInformado);
console.log(resultado);
```

### 2. Contagem da Letra 'a' em uma string

**Descrição:**  Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

**Resolução da questão:**

```javascript
function countLetterA(string) {
  const characters = string.split("");

  const letterAArray = characters.filter(
    (char) => char === "a" || char === "A"
  );

  if (letterAArray.length > 0) {
    return `A letra 'a' existe nessa string e aparece ${letterAArray.length} vezes.`;
  }

  return "A letra 'a' não existe nessa string.";
}

console.log(countLetterA("abcdeaA"));
```

### 3. Lógica de Cálculo

**Descrição:** Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

**Resolução da questão:**

```javascript
let indice = 12;
let soma = 0;
let k = 1;

while (k < indice) {
  k = k + 1;
  soma = soma + k;
}
console.log(soma);
```
O valor da variável soma é 77

### 4. Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, ___

b) 2, 4, 8, 16, 32, 64, ____

c) 0, 1, 4, 9, 16, 25, 36, ____

d) 4, 16, 36, 64, ____

e) 1, 1, 2, 3, 5, 8, ____

f) 2, 10, 12, 16, 17, 18, 19, ____

**Resolução da questão:**

 **a)** 9  
 **b)** 128  
 **c)** 49  
 **d)** 100  
 **e)** 13  
 **f)** 20

### 5.Desafio Interruptores

**Descrição:** Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?  

**Resolução da questão:** 

Entendendo que há 3 salas cada um com uma lâmapda:
Na primeira ida:

- Ligo o interruptor  1 por 10 minutos e o desligo, ligo o interruptor 2 e na mesma hora vou até uma das 3 salas
- Se a lampada estiver acessa, pertence ao interruptor 2, se estiver desligada e quente pertence ao interruptor 1, se estiver desligada e fria pertence ao interruptor 3.

Na segunda ida:
- Sabendo já a qual pertence um interruptor, apenas deixo um ligado e outro desligado entre o restantes
- Vou até outra sala e descubro os outros dois.
