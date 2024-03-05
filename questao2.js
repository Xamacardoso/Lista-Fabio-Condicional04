import { getstring, write } from "./utils/io_utils.js";

// 2. Leia uma letra, verifique se letra é "F" ou "M" e escreva F - Feminino, M - Masculino, Sexo Inválido.

function main(){
    write(" ----- MASCULINO OU FEMININO -----\n")
    // Entrada
    const gen = getstring(" DIGITE A LETRA QUE REPRESENTA SEU SEXO: ")
    
    // Processamento e saída
    if (gen.toLowerCase() === "f"){
        write(" F - FEMININO")
    }else if (gen.toLowerCase() === "m"){
        write(" M - MASCULINO")
    }else {
        write(" SEXO INVÁLIDO!!!")
        main()        
    }
}

main()