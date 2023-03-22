import { PokemonCreator } from "./pokemon_creator";
import { FirePokemon } from "../pokemon/fire_pokemon";
import { Pokemon } from "../pokemon/pokemon";
/**
 * Clase FirePokemonCreator
 */
export class FirePokemonCreator extends PokemonCreator {
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
   * @returns Pokmeon de tipo fuego
   */
  public factoryMethod(): Pokemon {
    return new FirePokemon(this.name, this.level, this.stats, this.type);
  }
}
