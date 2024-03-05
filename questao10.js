import { calcularconceito, getnumber, write } from "./utils/io_utils.js";

// 10. Leia as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:
function main(){
    write(" ----- APROVADO OU REPROVADO v2.0 -----\n")
    // Entrada
    const nota1 = getnumber(" NOTA 1: ")
    const nota2 = getnumber(" NOTA 2: ")
    
    // Processamento
    const media = (nota1+nota2)/2
    const conceito = calcularconceito(media)
    let situacao
    if (conceito == "D" || conceito == "E"){
        situacao = "REPROVADO"
    }else{
        situacao = "APROVADO"
    }
    // Saída
    write(`
    ==== RELATORIO ====

    NOTA 1  : ${nota1.toFixed(1)}
    NOTA 2  : ${nota2.toFixed(1)}
    MEDIA   : ${media.toFixed(1)}
    CONCEITO: ${conceito}
    SITUACAO: ${situacao}
    `)
}

main()