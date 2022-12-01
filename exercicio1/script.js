

// # Exercício 1

// Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
    

divisibilidade = Number(prompt("digite um número"))

if (divisibilidade%2===0 || divisibilidade%3===0) {
    console.log("Valor aceito")
   
} else {
    console.log("Valor não aceito")
}

