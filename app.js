//OBTENIENDO LOS IDS DE MI HTML
let input=document.querySelector("#cadenaText")
let resultado=document.querySelector("#resultado")

let btnLimpiar=document.querySelector("#limpiarCampos")
let btnContarVocales=document.querySelector("#contarVocales")

function limpiarCampos(){
    input.value=""
    resultado.value=""
    input.focus()
}

function contarVocales(cadena){
    let cont=0
    let arrayVocales=["a","e","i","o","u","A","E","I","O","U","á","é","í","ó","ú","Á","É","Í","Ó","Ú"]

    for(let i=0;i<=cadena.length-1;i++){
        for(let j=0;j<=arrayVocales.length-1;j++){
            if(cadena[i]==arrayVocales[j]){
                cont++
            }
        }
    }
    return cont
}

btnLimpiar.addEventListener("click",()=>{
    limpiarCampos()
})

btnContarVocales.addEventListener("click",()=>{
    resultado.value="La frase tiene " +contarVocales(input.value) + " vocales"
})