import { getnumber, write } from "./utils/io_utils.js";

// 1. Leia um número e mostre na tela se o número é positivo ou negativo.

function main(){
    write(" ----- POSITIVO OU NEGATIVO -----\n")
    // Entrada
    const numero = getnumber(" NUMERO: ")
    
    // Processamento e saída
    if (numero < 0){
        write(" O NUMERO ESCOLHIDO É NEGATIVO!!")
    }else{
        write(" O NUMERO ESCOLHIDO É POSITIVO!")
    }
}

main()