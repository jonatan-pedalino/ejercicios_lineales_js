document.getElementById("ejercicio11")
var base = Number(prompt("ingrese el diametro de la base del triangulo"))
var altura = Number(prompt("ingrese la altura del triangulo"))

    function superficie (a,b){

    var formula = (base * altura) / 2

    return formula

}

console.log("la superficie es " + superficie() + " cm")



    function perimetro (a,b,c) {

    var formulaArea = a + b + c
    
    return formulaArea
}

console.log("el perimetro es " + perimetro(base,altura,superficie()) + " cm")