 function calcular() {
        // Obtener los valores de los campos operación y números
        const operacion = document.getElementById("operacion").value;
        const numeros = document.getElementById("numeros").value;

        // Convertir los números a un array
        const numsArr = numeros.split(",");

        // Inicializar la variable resultado en 0
        let resultado = 0;

        // Utilizar la estructura de control switch para ejecutar la operación correspondiente a la opción seleccionada
        switch (operacion) {
          case "suma":
            // Utilizar un bucle for para sumar los números
            for (let i = 0; i < numsArr.length; i++) {
              resultado += parseFloat(numsArr[i]);
            }
            break;

          case "resta":
            // Utilizar un bucle for para restar los números
            for (let i = 0; i < numsArr.length; i++) {
              if (i === 0) {
                resultado = parseFloat(numsArr[i]);
              } else {
                resultado -= parseFloat(numsArr[i]);
              }
            }
            break;

          case "multiplicacion":
            // Utilizar un bucle for para multiplicar los números
            resultado = 1;
            for (let i = 0; i < numsArr.length; i++) {
              resultado *= parseFloat(numsArr[i]);
            }
            break;

          case "division":
            // Dividir el primer número por el segundo
            resultado = parseFloat(numsArr[0]) / parseFloat(numsArr[1]);
            break;

          default:
            // Mostrar un mensaje de error si la operación no es reconocida
            document.getElementById("resultado").innerHTML =
              "Operación no reconocida";
            return;
        }

        // Mostrar el resultado de la operación
        document.getElementById("resultado").innerHTML =
          "El resultado es: " + resultado;
      }