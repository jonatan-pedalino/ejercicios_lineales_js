document.getElementById("ejercicio6")
    peso = prompt("ingrese su peso")
    altura = prompt("ingrese su altura")

    function bmi (a,b){
        calculo = a / (b^2)
        console.log("tu BMI es de " + calculo + "kg")
    }

    bmi (peso,altura)