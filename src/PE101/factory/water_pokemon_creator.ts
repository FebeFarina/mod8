import { PokemonCreator } from "./pokemon_creator";
import { WaterPokemon } from "../pokemon/water_pokemon";
import { Pokemon } from "../pokemon/pokemon";
/**
 * Clase WaterPokemonCreator
 */
export class WaterPokemonCreator extends PokemonCreator {
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
   * @returns Pokemon de tipo agua
   */
  public factoryMethod(): Pokemon {
    return new WaterPokemon(this.name, this.level, this.stats, this.type);
  }
}
