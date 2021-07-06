const pessoa = {
    nome:"Denise",
    idade:25,
    cidade:"São Bernardo do Campo"
}

//Notação de ponto

console.log(pessoa.nome)

//Notação de colchetes

console.log(pessoa['idade'])

//Destructuring - desestruturar objeto
const {nome, idade, cidade} = pessoa

console.log(cidade)