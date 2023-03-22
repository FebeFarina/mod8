import { Pokemon } from "../pokemon/pokemon";

export abstract class PokemonCreator {
    public abstract factoryMethod(): Pokemon;
}