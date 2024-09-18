//Importando la clase cabeceraPag
import { cabeceraPag } from "./ejercicio1Cabecera";
//Importando la clase Calculadora
import { Calculadora } from "./ejercicio2Calculadora";

//Para identificar entre cada ejercicio
console.log("EJERCICIO 1")
//Cabecera Página
const cabecera = new cabeceraPag("Hola Kenia", "Morado", "Time New Roman");
cabecera.alineacionCabecera('centro');
cabecera.imprimirPropiedades();


//Para identificar entre cada ejercicio
console.log("     ")
console.log("EJERCICIO 2")
//Ejercicio Calculadora
const calculadora = new Calculadora();
console.log("LA SUMA ES DE: " + calculadora.sumar(15, 2));
console.log("LA RESTA ES DE: " + calculadora.restar(15, 2));
console.log("LA MULTIPLICACIÓN ES DE: " + calculadora.multiplicar(15, 2));
console.log("LA DIVISIÓN ES DE: " + calculadora.dividir(15, 2));
console.log("LA POTENCIA ES DE: " + calculadora.potencia(15, 2));
console.log("EL FACTORIAL ES DE: " + calculadora.factorial(15));