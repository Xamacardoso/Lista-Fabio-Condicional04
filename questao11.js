import { cdu, getnumber_in_range, getnumber_order, write } from "./utils/io_utils.js";

// 11

function main(){
    write(" ----- ORDENS DO NUMERO -----\n")
    // Entrada
    const numero = getnumber_in_range(" NUMERO (<1000): ", 1, 1000)
    
    // Processamento
    const centena = getnumber_order(numero, "C")
    const dezena = getnumber_order(numero, "D")
    const unidade = getnumber_order(numero, "U")

    const resultado = cdu(centena,dezena,unidade)
    // Saída
    write(resultado)
}



main()