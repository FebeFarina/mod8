import { PokemonCreator } from "./pokemon_creator";
import { WaterPokemon } from "../pokemon/water_pokemon";
import { Pokemon } from "../pokemon/pokemon";

export class WaterPokemonCreator extends PokemonCreator {
  constructor(
    private readonly name: string,
    private level: number,
    private readonly stats: { [key: string]: number },
    private readonly type: string = "fire"
  ) {
    super();
  }
  public factoryMethod(): Pokemon {
    return new WaterPokemon(this.name, this.level, this.stats, this.type);
  }
}
