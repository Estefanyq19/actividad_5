/**EJERCICIO 2: 
 * Crear una clase Calculadora que contendrá los siguientes métodos:
 * •	Sumar
 * •	Restar
 * •	Multiplicar
 * •	Dividir
 * •	Potencia
 * •	Factorial
 */

export class Calculadora {
    sumar(num1: number, num2: number): number {
        return num1 + num2;
    }
  
    restar(num1: number, num2: number): number {
        return num1 - num2;
    }
  
    multiplicar(num1: number, num2: number): number {
      return num1 * num2;
    }
  
    dividir(num1: number, num2: number): number {
      if (num2 === 0) {
        throw new Error("ERROR. NO SE PUEDE DIVIDIR ENTRE 0");
      }
      return num1 / num2;
    }
  
    potencia(base: number, exponente: number): number {
      return Math.pow(base, exponente);
    }
  
    factorial(n: number): number {
      if (n < 0) {
        throw new Error("ERROR. NÚMERO NEGATIVO");
      }
      if (n === 0 || n === 1) {
        return 1;
      }
      return n * this.factorial(n - 1);
    }
}  