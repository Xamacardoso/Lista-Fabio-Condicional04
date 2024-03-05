import { getnumber, write } from "./utils/io_utils.js";

// 9. Leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda etc.), se digitar outro valor deve aparecer valor inválido.

function main(){
    write(" ----- POSITIVO OU NEGATIVO -----\n")
    // Entrada
    const dia = getnumber(" DIA DA SEMANA: ")
    
    // Processamento e saída
    if (dia < 0){
        write(" VALOR INVALIDO")
        main()
    }else if (dia > 7){
        write(" VALOR INVALIDO")
        main()
    }else if (dia == 1){
        write(" 1 - DOMINGO")
    }else if (dia == 2){
        write(" 2 - SEGUNDA")
    }else if (dia == 3){
        write(" 3 - TERÇA")
    }else if (dia == 4){
        write(" 4 - QUARTA")
    }else if (dia == 5){
        write(" 5 - QUINTA")
    }else if (dia == 6){
        write(" 6 - SEXTA")
    }else if (dia == 7){
        write(" 7 - SABADO")
    }
}

main()