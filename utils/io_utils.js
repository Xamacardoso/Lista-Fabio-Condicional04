import { question } from "readline-sync";

export function getnumber(mensagem){
    return Number(question(mensagem))
}

export function getstring(mensagem){
    return String(question(mensagem))
}

export function write(mensagem){
    return console.log(mensagem)
}

export function calc_percentual(salario){
    if (salario <= 280){
        return 20
    }else if (salario <= 700){
        return 15
    }else if (salario <= 1500){
        return 10
    }else {
        return 5
    }
}

export function calc_aumento(salario, percentual){
    return salario * (percentual/100)
}

export function calcular_ir(salbruto){
    if (salbruto <= 900){
        return 0
    }else if (salbruto <= 1500){
        return 5
    }else if (salbruto <= 2500){
        return 10
    }else {
        return 15
    }
}

export function calcularconceito(media){
    if (media < 4){
        return "E"
    }else if (media < 6){
        return "D"
    }else if (media < 7.5){
        return "C"
    }else if (media < 9){
        return "B"
    }else if (media <= 10){
        return "A"
    }

}

export function getnumber_in_range(mensagem, min, max){
    const numero = getnumber(mensagem)
    if (numero < min || numero > max){
        print('Número inválido! Digite novamente')
        return get_number_in_range(mensagem, min, max)
      }
    
    return numero
}

export function getnumber_order(numero, ordem){
    if (ordem === "C"){
        return Math.floor(numero/100)
    }else if(ordem === "D"){
        let resto = numero%100
        return Math.floor(resto/10)
    }
    return numero%10
}

export function cdu(c,d,u){
    
    let txt_centena = c > 1 ? 'centenas' : 'centena'
    let txt_dezena = d > 1 ? 'dezenas' : 'dezena'
    let txt_unidade = u > 1 ? 'unidades' : 'unidade'

    if (c === 0){//nao tem centena
        if (d === 0){//nao tem centena e dezena
            if (u > 0){ // nao tem centena nem dezena, mas tem unidade, vamos desconsiderar o caso que nao tem nada
                return ` ${u} => ${u} ${txt_unidade}`
            }
        }else{//nao tem centena mas tem dezena
            if (u === 0){//nao tem centena, tem dezena mas nao tem unidade
                return ` ${d*10} => ${d} ${txt_dezena}`
            }else{// nao tem centena, tem dezena e unidade
                return ` ${d*10+u} +> ${d} ${txt_dezena} e ${u} ${txt_unidade}`
            }
        }
    }else{//tem centena
        if (d > 0){//tem centena e dezena
            if (u > 0){// tem centena, dezena e unidade
                return ` ${c*100+d*10+u} => ${c} ${txt_centena}, ${d} ${txt_dezena} e ${u} ${txt_unidade}`
            }else{//tem centena e  dezena, mas nao tem unidade
                return ` ${c*100+d*10} => ${c} ${txt_centena} e ${d} ${txt_dezena}`
            }
        }else{//tem centena, mas nao tem dezena
            if (u > 0){// tem centena, nao tem dezena e tem unidade 
                return ` ${c*100+d*10+u} => ${c} ${txt_centena} e ${u} ${txt_unidade}`
            }else{// tem centena, nao tem dezena e nao tem unidade
                return ` ${c*100} => ${c} ${txt_centena}`
            }
        }
    }
}

export function int_or_dec(num){
    if (Number.isInteger(num)){
        return " É UM NUMERO INTEIRO!!"
    }
    return " É UM NUMERO DECIMAL!!!"
}

export function sim_ou_nao(mensagem){
    const resposta = getstring(mensagem)

    if (resposta.toLowerCase() === "s"){
        return 1
    }else if (resposta.toLowerCase() === "n"){
        return 0
    }
    write(" RESPOSTA INVÁLIDA")
    sim_ou_nao(mensagem)
}

export function veredict(num){
    if (num<2){
        return " VEREDITO: INOCENTE!"
    }else if (num == 2){
        return " VEREDITO: SUSPEITO!"
    }else if (num <= 4){
        return " VEREDITO: CÚMPLICE!!"
    }
    return " VEREDITO: ASSASSINO!!!"
}