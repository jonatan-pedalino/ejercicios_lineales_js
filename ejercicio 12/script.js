document.getElementById("ejercicio12")

var peso = prompt("ingrese su peso en kg")

    function conversionPeso (a) {
        var conversion = peso * 2.205
        alert(["su peso en libras es " + conversion +  " libras"])
        return ["su peso en libras es " + conversion + " libras"]
    }

    console.log(conversionPeso())