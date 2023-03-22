import "mocha";
import { expect } from "chai";
import { GrassPokemonCreator } from "../../../src/PE101/factory/grass_pokemon_creator";
import {GrassPokemon} from "../../../src/PE101/pokemon/grass_pokemon";

describe("GrassPokemonCreator", () => {
    it("Debería ser una clase", () => {
        expect(GrassPokemonCreator).to.be.an("function");
    });
    it("Debería crear un pokemon de tipo fuego", () => {
        const grassPokemonCreator = new GrassPokemonCreator("Bulbasaur", 1, { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45});
        const grassPokemon = grassPokemonCreator.factoryMethod();
        expect(grassPokemon).to.be.an.instanceOf(GrassPokemon);
    });
});