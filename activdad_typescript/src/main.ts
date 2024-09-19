//Importando la clase cabeceraPag
import { cabeceraPag } from "./ejercicio1Cabecera";
//Importando la clase Calculadora
import { Calculadora } from "./ejercicio2Calculadora";
//Importando la clase Cancion
import { Cancion } from "./ejercicio3Cancion";
//Importando la clase Cuenta
import { Cuenta } from "./ejercicio4Cuenta";

//Ejercicio1
console.log("EJERCICIO 1")
const cabecera = new cabeceraPag("Hola Kenia", "Morado", "Time New Roman");
cabecera.alineacionCabecera('centro');
cabecera.imprimirPropiedades();

//Ejercicio2
console.log("     ")
console.log("EJERCICIO 2")
const calculadora = new Calculadora();
console.log("LA SUMA ES DE: " + calculadora.sumar(15, 2));
console.log("LA RESTA ES DE: " + calculadora.restar(15, 2));
console.log("LA MULTIPLICACIÓN ES DE: " + calculadora.multiplicar(15, 2));
console.log("LA DIVISIÓN ES DE: " + calculadora.dividir(15, 2));
console.log("LA POTENCIA ES DE: " + calculadora.potencia(15, 2));
console.log("EL FACTORIAL ES DE: " + calculadora.factorial(15));

//Ejercicio3
console.log("     ")
console.log("EJERCICIO 3")
const cancion = new Cancion("Eso y más", "Regional Mexicano");
cancion.autor = "Joan Sebastian";
cancion.mostrarDatos();

//Ejercicio4
console.log("     ")
console.log("EJERCICIO 4")
const miCuenta = new Cuenta("Estefany Quezada", 543, "Cuenta de ahorro", "0023-0005");
miCuenta.mostrarDatos();
miCuenta.depositar(50);
miCuenta.retirar(543);
//Imprimiendo para verificar el mensaje cuando no tengo saldo suficiente  para retirar
miCuenta.retirar(80);