// # Exercício 2

// Vamos recriar o exercício Nacionalidade da aula de condicionais I, utilizando switch-case. No arquivo `script.js` existe uma versão do código já escrita, mas você pode colar o exercício que você fez na última prática!




const escolhaSuaNacao = prompt("digite aqui a sua nacionalidade").toLowerCase()

let nacionalidade
switch (escolhaSuaNacao) {
    case "brasileira":
        nacionalidade = "brasileira"
        console.log("a pessoa é do Brasil!")
        break
    case "argentina":
        nacionalidade = "argentina"
        console.log("a pessoa é da Argentina!")
        break
    case "uruguaia":
        nacionalidade = "uruguaia"
        console.log("a pessoa é do Uruguai!")
        break
    case "chilena":
        nacionalidade = "chilena"
        console.log("a pessoa é do Chile!")
        break
    case "colombiana":
        nacionalidade = "colombiana"
        console.log("a pessoa é da Colômbia!")
        break
    default:    
        console.log("nacionalidade não encontrada")
        break
}
console.log("Nacionalidade:", nacionalidade);