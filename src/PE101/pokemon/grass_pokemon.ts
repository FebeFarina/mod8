import { Pokemon } from "./pokemon";
/**
 * Clase GrassPokemon
 */
export class GrassPokemon implements Pokemon {
  constructor(
    private readonly name: string,
    private level: number,
    private readonly stats: { [key: string]: number },
    private readonly type: string = "grass"
  ) {}
  /**
   * Método que devuelve el nombre del pokemon
   * @returns Nombre del pokemon
   */
   getName() {
    return this.name;
  }
  /**
   * Método que devuelve las estadísticas del pokemon
   * @returns Estadísticas del pokemon
   */
  getStats() {
    return this.stats;
  }
  /**
   * Método que devuelve el nivel del pokemon
   * @returns Nivel del pokemon
   */
  getLevel() {
    return this.level;
  } 
  /**
   * Método que sube de nivel al pokemon
   */
  levelUp() {
    this.level++;
  }
}
