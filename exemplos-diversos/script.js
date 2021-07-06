// Exercício FizzBuzz

let resultado = fizzBuzz(7);
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
    return 'Não é um número';
    
    if((entrada % 3 === 0) && (entrada % 5 === 0))
    return 'FizzBuzz';

    if(entrada % 3 === 0)
    return 'Fizz';

    if((entrada % 5 === 0))
    return 'Buzz';

    return entrada;
}

//Reverse a string

let newString = '';

function reverseString(str){
    for (let i = str.length -1; i >= 0; i-- ){
        newString += str[i];
    }
    console.log(newString)
}

let resultadoString = reverseString('Deniso')

//Convert Celsius to Fahrenheit

function convetToFahrenheit(value) {
    return value * 1.8 + 32;    
}

let resutadoTemperatura = convetToFahrenheit(1);


//Tamplete String - Interpolação

let tampleteString = "template string"

console.log(`Testando o ${tampleteString}`)

//Operador ternario - Alternativa ao if else

//Exemplo if else
// if(idade >= 18){
//     return 'Maior de idade'
// } else {
//     return 'Menor de idade'
// }

// Como ficaria com o operador ternario
// idade < 18 ? 'Maior de idade' : 'Menor de idade'

//Dentro de uma função
function calculaIdade(idade){
    return idade > 18 ? 'Maior de idade' : 'Menor de idade'
}

console.log(calculaIdade(17))

//Arrow Functions

const somar = (num1, num2) => num1 + num2
console.log(somar(71,2))

