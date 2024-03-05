import { calc_aumento, calc_percentual, getnumber, write } from "./utils/io_utils.js";

// 7. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes. Escreva um algoritmo que leia o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual

function main(){
    write(" ----- REAJUSTE SALARIAL -----\n")
    // Entrada
    const salario = getnumber(" SALARIO (EM R$): ")
    
    // Processamento 
    const percentual = calc_percentual(salario)
    const aumento = calc_aumento(salario,percentual)
    const salario_novo = salario + aumento


    // Saída
    write(`
    SALARIO ANTERIOR: R$ ${salario.toFixed(2)}
    PERCENTUAL DE AUMENTO: ${percentual}%
    VALOR DO AUMENTO: R$ ${aumento.toFixed(2)}
    NOVO SALARIO: R$ ${salario_novo.toFixed(2)}
    `)
}

main()