import { Pokemon } from "./pokemon";

export class WaterPokemon implements Pokemon {
  constructor(
    private readonly name: string,
    private level: number,
    private readonly stats: { [key: string]: number },
    private readonly type: string = "water"
  ) {}
  getName() {
    return this.name;
  }
  getStats() {
    return this.stats;
  }
  getLevel() {
    return this.level;
  }
  levelUp() {
    this.level++;
  }
}
