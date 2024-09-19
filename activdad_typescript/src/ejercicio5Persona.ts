/**EJERCICIO 5. 
 * Crear una clase abstracta Persona y va contener lo siguiente:
 * Atributos: nombre, apellido, dirección, teléfono y edad.
 * Métodos: 
 * •	Crear un método constructor para recibir los datos.
 * •	Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
 * •	Crea un método para mostrar todos los datos personales (será el método abstracto).
 * •	Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
 * •	En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
 * •	La clase Empleado va heredar de la clase Persona.
 * •	Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.
 * */


export abstract class Persona {
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    edad: number;
  
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.direccion = direccion;
      this.telefono = telefono;
      this.edad = edad;
    }
  
    esMayorDeEdad(): void {
      if (this.edad >= 18) {
        console.log(`${this.nombre} ${this.apellido} ES MAYOR DE EDAD`);
      } else {
        console.log(`${this.nombre} ${this.apellido} ES MENOR DE EDAD`);
      }
    }
  
    abstract mostrarDatos(): void;
  }

  export class Empleado extends Persona {

    sueldo: number;
  
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
      super(nombre, apellido, direccion, telefono, edad);
      this.sueldo = sueldo;
    }
  
    cargarSueldo(sueldo: number): void {
      this.sueldo = sueldo;
    }
  
    imprimirSueldo(): void {
      console.log(`EL SUELDO DE ${this.nombre} ES DE: $${this.sueldo}`);
    }
  
    mostrarDatos(): void {
      console.log(`NOMBRE: ${this.nombre} ${this.apellido}`);
      console.log(`DIRECCIÓN: ${this.direccion}`);
      console.log(`TELÉFONO: ${this.telefono}`);
      console.log(`EDAD: ${this.edad}`);
      this.esMayorDeEdad();
    }
}  