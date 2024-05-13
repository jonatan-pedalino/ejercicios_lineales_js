document.getElementById("ejercicio16")

    //var matricula = prompt("ingrese su matricula")

    var nota1 = Number(prompt("ingrese su primer nota"))
    var nota2 = Number(prompt("ingrese su segunda nota"))
    var nota3 = Number(prompt("ingrese su tercer nota"))
    var nota4 = Number(prompt("ingrese su cuarta nota"))
    var nota5 = Number(prompt("ingrese su quinta nota"))

        function promedioNotas (a,b,c,d,e) {
            var promedio = (nota1 + nota2 + nota3 + nota4 +nota5) / 5

            return promedio
        }

        console.log(promedioNotas())