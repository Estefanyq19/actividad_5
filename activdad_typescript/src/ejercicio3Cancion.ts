/**EJERCICIO 3. 
 * Crea una clase llamada Canción:
 * Atributos: título, género de la canción y un atributo privado que se llame autor.
 * 
 * Métodos: 
 * •	Crear un constructor que reciba como parámetros el título y género de la canción.
 * •	Utiliza los métodos get y set para recibir e imprimir la propiedad autor. 
 * •	Crea un método para mostrar los datos de la canción. 
 */

export class Cancion {
    titulo: string;
    genero: string;
    private _autor: string;
  
    constructor(titulo: string, genero: string) {
      this.titulo = titulo;
      this.genero = genero;
      this._autor = "";
    }
  
    get autor(): string {
      return this._autor;
    }
  
    set autor(value: string) {
      this._autor = value;
    }
  
    mostrarDatos(): void {
      console.log(`TÍTULO: ${this.titulo}`);
      console.log(`GÉNERO: ${this.genero}`);
      console.log(`AUTOR: ${this.autor}`);
    }
}