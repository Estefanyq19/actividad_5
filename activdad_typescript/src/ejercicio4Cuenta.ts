/**EJERCICIO 4. Crea una clase llamada Cuenta y va contener lo siguiente:
 * Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
 * Métodos: 
 * •	Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y número de cuenta.
 * •	Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una condición 
 * de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a depositar debe ser mayor a $5.00 y sino 
 * solo imprima un mensaje de que se ha depositado correctamente y la cantidad depositada.
 * •	Crea un método llamado retirar, que reciba un parámetro llamado valor y 
 * en base a eso tienes que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y cuanto le queda en su cuenta.
 * Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que si no hay efectivo debes 
 * de tirar un mensaje que no hay nada en la cuenta.
 * •	Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta. 
 * •	Define un objeto de la clase Cuenta y llama sus métodos.
 * */

export class Cuenta {
    nombre: string;
    cantidad: number;
    tipoCuenta: string;
    numeroCuenta: string;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
      this.nombre = nombre;
      this.cantidad = cantidad;
      this.tipoCuenta = tipoCuenta;
      this.numeroCuenta = numeroCuenta;
    }

    depositar(deposito: number): void {
      if (deposito < 5) {
        console.log("DEPOSITAR UN VALOR MAYOR A $5.00");
      } else {
        this.cantidad += deposito;
        console.log(`SE HA REALIZADO EL DEPOSITO CORRECTAMENTE $${deposito}.`);
        console.log(`CANTIDAD EN CUENTA: $${this.cantidad}`);
      }
    }
  
    retirar(valor: number): void {
      if (this.cantidad < 5) {
        console.log("NO TIENES SALDO SUFICIENTE EN TU CUENTA");
      } else if (valor > this.cantidad) {
        console.log("FONDOS INSUFICIENTES");
      } else {
        this.cantidad -= valor;
        console.log(`VALOR RETIRADO $${valor}.`);
        console.log(`SALDO RESTANTE: $${this.cantidad}`);
      }
    }
  
    mostrarDatos(): void {
      console.log(`NOMBRE: ${this.nombre}`);
      console.log(`CUENTA: ${this.tipoCuenta}`);
      console.log(`NÚMERO DE CUENTA: ${this.numeroCuenta}`);
    }
}