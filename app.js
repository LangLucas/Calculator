//js usa el id del html para llamarlo a los funcionamientos 

let $numero1 = document.getElementById('input-n1')
let $numero2 = document.getElementById('input-n2')
let $resultado = document.getElementById('resultado')

function restar(){
    let n1 = $numero1.value
    let n2 = $numero2.value
    let r

    r = n1 - n2

    $resultado.innerHTML = r /**muestra el resultado sin las lineas de html */
}

function sumar(){
    let n1 = Number($numero1.value)
    let n2 = Number($numero2.value)
    let r

    r = n1+n2

    $resultado.innerHTML = r 
}

function multiplicacion(){
    let n1 = $numero1.value
    let n2 = $numero2.value
    let r

    r = n1 * n2

    $resultado.innerHTML = r 
}

function division(){
    let n1 = $numero1.value
    let n2 = $numero2.value
    let r

    r = n1 / n2 //conversion implicita 8automatica)

    $resultado.innerHTML = r 

}

function reset(){
    $numero1.value = ''
    $numero2.value = ''
    $resultado.innerHTML = ''
}

//Conversion inplicita y explicita

//Nan = not a number