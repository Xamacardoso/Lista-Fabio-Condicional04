import { getstring, write } from "./utils/io_utils.js";

// 6. Leia o turno em que um aluno estuda, sendo M para matutino, V para Vespertino ou N para Noturno e escreva a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

function main(){
    write(" ----- TURNO DE ESTUDO -----\n")
    // Entrada
    const turno = getstring(" DIGITE A LETRA QUE REPRESENTA SEU TURNO DE ESTUDO: ")
    
    // Processamento e saída
    if (turno.toLowerCase() === "m"){
        write(" M - MATUTINO")
    }else if (turno.toLowerCase() === "v"){
        write(" V - VESPERTINO")
    }else if (turno.toLowerCase() === "n"){
        write(" N - NOTURNO")
    }else {
        write(" TURNO INVÁLIDO!!!")
        main()        
    }
}

main()