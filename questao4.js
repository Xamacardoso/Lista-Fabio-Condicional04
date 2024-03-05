import { getnumber, write } from "./utils/io_utils.js";

// 4. Leia 2 (duas) notas parciais de um aluno, calcule a média e escreva a mensagem:

function main(){
    write(" ----- APROVADO OU REPROVADO -----\n")
    // Entrada
    const nota1 = getnumber(" NOTA 1: ")
    const nota2 = getnumber(" NOTA 2: ")
    
    // Processamento
    const media = (nota1+nota2)/2
    
    // Saída
    if (media == 10){
        write(" APROVADO COM DISTINÇÃO!!!")
    
    }else if (media < 7){
        write(" REPROVADO!!")
    
    }else{
        write(" APROVADO!!")
    }
}

main()