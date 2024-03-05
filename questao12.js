import { getnumber, int_or_dec, write } from "./utils/io_utils.js";

// 12

function main(){
    write(" ----- INTEIRO ou DECIMAL -----\n")
    // Entrada
    const numero = getnumber(" DIGITE UM NUMERO: ")
    
    // Processamento
    const resultado = int_or_dec(numero)
    
    // Saída
    write(resultado)
}

main()