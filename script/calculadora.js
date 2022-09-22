 



//Soma Elementos
function soma(){

    const value1= Number(document.getElementById('value_1').value)

    const value2= Number(document.getElementById('value_2').value)

    const result = value1 + value2
    
    document.getElementById('result').value = result
    
}

//Subtrai Elementos
function subtrair(){

    const value1= Number(document.getElementById('value_1').value)

    const value2= Number(document.getElementById('value_2').value)

    const result = value1 - value2
    
    document.getElementById('result').value = result
    
}

//Multiplica Elementos
function multiplicar(){

    const value1= Number(document.getElementById('value_1').value)

    const value2= Number(document.getElementById('value_2').value)

    const result = value1 * value2
    
    document.getElementById('result').value = result
    
}

//Divide Elementos
function dividir(){

    const value1= Number(document.getElementById('value_1').value)

    const value2= Number(document.getElementById('value_2').value)

    const result = value1 / value2
    
    document.getElementById('result').value = result.toFixed(2)
    
}

//Limpa Elementos
function limpar(){

    document.getElementById('value_1').value= ""

    document.getElementById('value_2').value= ""

    const result = 0
    
    document.getElementById('result').value = ""
    
}
