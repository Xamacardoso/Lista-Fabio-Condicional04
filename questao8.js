import { calcular_ir, getnumber, write } from "./utils/io_utils.js";


function main(){
    write(" ----- IMPOSTOS E DESCONTOS -----\n")
    // Entrada
    const valorhora = getnumber(" VALOR DA HORA DE TRABALHO (EM R$): ")
    const quanthora = getnumber(" QUANTIDADE DE HORAS TRABALHADAS : ")
    
    // Processamento 
    const salbruto = valorhora * quanthora
    const porcentagem_ir = calcular_ir(salbruto)
    const ir = (porcentagem_ir/100) * salbruto
    const inss = 0.1*salbruto
    const fgts = 0.11*salbruto


    // Saída
    write(`
    SALARIO BRUTO (${valorhora} * ${quanthora})    : R$ ${salbruto.toFixed(2)}
 (-)IR (${porcentagem_ir}%)                    : R$ ${ir.toFixed(2)}
 (-)INSS (10%)                 : R$ ${inss.toFixed(2)}
    FGTS (11%)                 : R$ ${fgts.toFixed(2)}
    NOVO SALARIO               : R$ ${(salbruto - ir - inss).toFixed(2)}
    `)
}

main()