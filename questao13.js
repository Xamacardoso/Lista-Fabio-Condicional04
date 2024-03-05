import { veredict, sim_ou_nao, getstring, write } from "./utils/io_utils.js";

// 13

function main(){
    write(" ----- INOCENTE, SUSPEITO, CUMPLICE ou CULPADO -----\n")
    write(" RESPONDA (S) SIM ou (N) NÃO PARA AS SEGUINTES PERGUNTAS\n")
    // Entrada
    const pergunta1 = sim_ou_nao(" Telefonou para a vítima ?: ")
    const pergunta2 = sim_ou_nao(" Esteve no local do crime ?: ")
    const pergunta3 = sim_ou_nao(" Mora perto da vítima ?: ")
    const pergunta4 = sim_ou_nao(" Devia para a vítima ?: ")
    const pergunta5 = sim_ou_nao(" Já trabalhou com a vítima ?: ")
    
    // Processamento
    const resultado = pergunta1+pergunta2+pergunta3+pergunta4+pergunta5
    const veredito = veredict(resultado)
    
    // Saída
    write(veredito)
}



main()