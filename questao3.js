import { getstring, write } from "./utils/io_utils.js";

// 3. Leia uma letra e verifique se a letra digitada é vogal ou consoante.

function main(){
    write(" ----- VOGAL OU CONSOANTE -----\n")
    // Entrada
    const letra = getstring(" DIGITE UMA LETRA: ")
    
    // Processamento e saída
    if (letra.toLowerCase() === "a" || letra.toLowerCase() ===  "e" || letra.toLowerCase() ===  "i" || letra.toLowerCase() ===  "o" || letra.toLowerCase() ===  "u"){
        write(" É VOGAL")

    }else {
        write(" É CONSOANTE")

    }
}

main()