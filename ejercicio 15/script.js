document.getElementById("ejercicio15")

var categoria = prompt("ingrese su categria: ingrese (1) si es calificado primera (2) si es calificado segunda y (3) si es calificado tercera")
var sueldo = Number(prompt("ingrese su sueldo"))

    if (categoria == "1"){
        alert("su categoria es calificado primera y su aumento es del 35%")
        sueldo = (sueldo * 35) / 100 + sueldo
        alert("su sueldo pasaria a se de " + sueldo + " pesos")
    }else if (categoria == "2") {
        alert("su categoria es calificado segunda y su aumento es del 25%")
        sueldo = (sueldo * 25) / 100 + sueldo
        alert("su sueldo pasaria a se de " + sueldo + " pesos")
    } else if (categoria == "3") {
        alert("su categoria es calificado tercera y su aumento es del 18%")
        sueldo = (sueldo * 18) / 100 + sueldo
        alert("su sueldo pasaria a se de " + sueldo + " pesos")
    }

