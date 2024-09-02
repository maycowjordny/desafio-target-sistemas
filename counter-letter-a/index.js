// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

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
