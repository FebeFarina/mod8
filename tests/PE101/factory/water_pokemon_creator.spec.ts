import "mocha";
import { expect } from "chai";
import { WaterPokemonCreator } from "../../../src/PE101/factory/water_pokemon_creator";
import {WaterPokemon} from "../../../src/PE101/pokemon/water_pokemon";

describe("waterPokemonCreator", () => {
    it("Debería ser una clase", () => {
        expect(WaterPokemonCreator).to.be.an("function");
    });
    it("Debería crear un pokemon de tipo fuego", () => {
        const waterPokemonCreator = new WaterPokemonCreator("Squirtle", 1, { hp: 44, attack: 48, defense: 65, specialAttack: 50, specialDefense: 64, speed: 43 });
        const waterPokemon = waterPokemonCreator.factoryMethod();
        expect(waterPokemon).to.be.an.instanceOf(WaterPokemon);
    });
});