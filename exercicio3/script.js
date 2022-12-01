// //código a ser reescrito

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }

// # Exercício 3

// Reescreva os códigos do arquivo script.js utilizando o if ternário.

// **Relembrando o if ternário**
// ```jsx
// condição ? expr1 : expr2
// ```

// Onde :

// `condição` é uma expressão que é avaliada como `true` ou `false`.

// `expr1`, `expr2` são xpressões com valores de qualquer tipo.
const nome = prompt("digita seu nome")
const idade = prompt("digita sua idade")
if (idade >= 18) {
    console.log("pode tirar carteira de motorista!")

} else {
    console.log("Ainda não pode tirar carteira de motorista")
}
if (nome) {
	nome === "José" ? console.log("Oi José") :  console.log("Oi", nome)
}