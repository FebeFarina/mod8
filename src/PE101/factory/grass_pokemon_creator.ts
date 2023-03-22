import { PokemonCreator } from "./pokemon_creator";
import { GrassPokemon } from "../pokemon/grass_pokemon";
import { Pokemon } from "../pokemon/pokemon";
/**
 * Clase GrassPokemonCreator
 */
export class GrassPokemonCreator extends PokemonCreator {
  constructor(
    private readonly name: string,
    private level: number,
    private readonly stats: { [key: string]: number },
    private readonly type: string = "fire"
  ) {
    super();
  }
  /**
   * Factory method
   * @returns Pokemon de tipo hierba
   */
  public factoryMethod(): Pokemon {
    return new GrassPokemon(this.name, this.level, this.stats, this.type);
  }
}
