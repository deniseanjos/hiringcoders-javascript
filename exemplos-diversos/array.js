//Metodo comum
const alunosGama = ["Teste1", "Teste2", "Teste3", "Teste4"]

console.log(alunosGama[2]) // Teste3

//Operador spread (...) - Copiar e trazer o array para novo array com novos elementos

const alunasXp = [...alunosGama, "Simara"]

console.log(alunasXp)

//Metodos de iteração

//MAP

for (let i = 0; i < alunasXp.length; i++){
    console.log(alunasXp[i])
}
console.log("Impressão do array através do map com")

alunasXp.map(aluna => console.log(aluna))

//FILTER
const numeros = [34, 45, 189, 90]

const numerosImpares = numeros.filter(numero => numero%2 != 0)
console.log(`Números impares ${numerosImpares}`)

const numerosPares = numeros.filter(numero => numero%2 == 0)
console.log(numerosPares)

//SORT
const ordemCrescente = numeros.sort()
console.log(ordemCrescente)

const ordemDecrescente = numeros.sort((a,b) => b-a)
console.log(ordemDecrescente)

//REDUCE - reduz array ao resultado de uma operação matematica
const numerosReduce = [1,35]

const somaReduce = numerosReduce.reduce((valorAnterior, valorAtual) => {
    return valorAnterior += valorAtual
},5)

console.log(somaReduce)