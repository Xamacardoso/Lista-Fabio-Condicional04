import { getnumber, write } from "./utils/io_utils.js";

// 5. Leia o preço de três produtos e informe qual produto deve ser comprado, sabendo que a decisão é sempre pelo mais barato.

function main(){
    write(" ----- MAIS BARATO ENTRE 3 PREÇOS -----\n")
    // Entrada
    const preco1 = getnumber(" PREÇO 1: ")
    const preco2 = getnumber(" PREÇO 2: ")
    const preco3 = getnumber(" PREÇO 3: ")
    
    // Processamento
    let maisbarato = preco1.toFixed(2)
    if (preco2 > maisbarato){
        maisbarato = preco2.toFixed(2)
    }if (preco3 > maisbarato){
        maisbarato = preco3.toFixed(2)
    }
    
    // Saída
    write(` Você deve comprar o PRODUTO QUE CUSTA R$ ${maisbarato}, pois ele é mais barato`)
}

main()