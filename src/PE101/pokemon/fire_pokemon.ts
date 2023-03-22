import { Pokemon } from "./pokemon";

export class FirePokemon implements Pokemon {
  constructor(
    private readonly name: string,
    private level: number,
    private readonly stats: { [key: string]: number },
    private readonly type: string = "fire"
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
