/*

Aquí hay algunos ejercicios básicos de JavaScript que te ayudarán a practicar y comprender mejor las funciones en JavaScript:

Crea una función que tome un número como argumento y devuelva "par" si el número es par o "impar" si el número es impar.

*/

function esPar(num) {
    if (num % 2 === 0) {
      return "par";
    } else {
      return "impar";
    }
  }
  
  console.log(esPar(2)); // "par"
  console.log(esPar(3)); // "impar"

 // Crea una función que calcule el área de un círculo a partir de su radio.

  function areaCirculo(radio) {
    return Math.PI * radio * radio;
  }
  
  console.log(areaCirculo(2)); // 12.57...
 // Crea una función que tome una cadena de texto como argumento y devuelva la cadena de texto invertida.
  
  function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
  }
  
  console.log(invertirCadena("hola")); // "aloh"
//  Crea una función que tome dos números como argumentos y devuelva el mayor de los dos números.

  function mayorNumero(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }
  
  console.log(mayorNumero(2, 3)); // 3

// Crea una función que tome una lista de números como argumento y devuelva la suma de todos los números en la lista.

function sumaNumeros(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

console.log(sumaNumeros([1, 2, 3, 4, 5])); // 15
//Crea una función que tome una cadena de texto y devuelva la cantidad de veces que aparece una determinada letra en la cadena.

function contarLetras(cadena, letra) {
  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === letra) {
      contador++;
    }
  }
  return contador;
}

console.log(contarLetras("hello", "l")); // 2

//Crea una función que tome una lista de palabras como argumento y devuelva una nueva lista que contenga solo las palabras con más de cinco letras.

function palabrasLargas(palabras) {
  let nuevaLista = [];
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > 5) {
      nuevaLista.push(palabras[i]);
    }
  }
  return nuevaLista;
}

console.log(palabrasLargas(["perro", "gato", "elefante", "ratón"])); // ["elefante"]

//Crea una función que tome dos números como argumentos y devuelva el resultado de sumarlos, restarlos, multiplicarlos y dividirlos.
function operaciones(a, b) {
  return {
    suma: a + b,
    resta: a - b,
    multiplicacion: a * b,
    division: a / b
  };
}

console.log(operaciones(2, 3));
// {suma: 5, resta: -1, multiplicacion: 6, division: 0.6666666666666666}

//Crea una función que tome un número como argumento y devuelva "positivo" si el número es positivo, "negativo" si el número es negativo o "cero" si el número es cero.

function positivoNegativoCero(num) {
  if (num > 0) {
    return "positivo";
  } else if (num < 0) {
    return "negativo";
  } else {
    return "cero";
  }
}

console.log(positivoNegativoCero(2)); // "positivo"
console.log(positivoNegativoCero(-3)); // "negativo"
console.log(positivoNegativoCero(0)); // "cero"

//Crea una función que tome dos palabras como argumentos y devuelva verdadero si ambas palabras tienen la misma longitud y falso en caso contrario.

function mismaLongitud(palabra1, palabra2) {
  return palabra1.length === palabra2.length;
}

console.log(mismaLongitud("hola", "adios")); // false
console.log(mismaLongitud("perro", "gato")); // true