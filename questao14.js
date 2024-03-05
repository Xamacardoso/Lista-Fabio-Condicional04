import { write, getnumber, getstring } from "./utils/io_utils.js";

// 14

function main(){
    write(`
 >> Álcool: R$ 1,90
    · até 20 litros, desconto de 3% por litro
    · acima de 20 litros, desconto de 5% por litro

 >> Gasolina: R$ 2,50
    · até 20 litros, desconto de 4% por litro
    · acima de 20 litros, desconto de 6% por litro.
    `)
    
    // Entrada
    const tipo = fuel_type(" Qual combustível o cliente deseja?: ")
    const litros = getnumber(" Quantos litros desse combustível o cliente deseja comprar?: ")
    // Processamento
    
    const valor = fuel_price(tipo, litros)
    
    // Saída
    write(` O CLIENTE DEVERÁ PAGAR R$ ${valor.toFixed(2)}`)
}

function fuel_type(mensagem){
    const tipo_combustivel = getstring(mensagem)

    if (tipo_combustivel.toLowerCase() === "a"){
        return "gasolina"
    }else if (tipo_combustivel.toLowerCase() === "g"){
        return "alcool"
    }
    write(" VALOR INVALIDO!!!")
    fuel_type(mensagem)
}

function fuel_price(type, liters){
    if (type === "a"){
        if (liters<=20){
            return (0.97*1.90) * liters
        }else{
            return (0.95*1.90) * liters
        } 
    }else{
        if (liters<=20){
            return (0.96*1.90) * liters
        }else{
            return (0.94*1.90) * liters
        }
    }	
}

main()