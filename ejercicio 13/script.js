document.getElementById("ejercicio13")

var sueldo = Number(prompt("ingrese su sueldo"))

    function aumentoSueldo (a) {
        var aumento15 = (sueldo * 15) / 100 + sueldo

        return aumento15
    }

    console.log(aumentoSueldo())