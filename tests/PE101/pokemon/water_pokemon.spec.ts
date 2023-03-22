import "mocha";
import { expect } from "chai";
import { WaterPokemon } from "../../../src/PE101/pokemon/water_pokemon";

describe("waterPokemon", () => {
    it("Debería crear un pokemon de tipo fuego", () => {
        const waterPokemon = new WaterPokemon("Charmander", 1, { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 });
        expect(waterPokemon).to.be.an.instanceOf(WaterPokemon);
    });
    it("Debería tener un nombre", () => {
        const waterPokemon = new WaterPokemon("Charmander", 1, { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 });
        expect(waterPokemon.getName()).to.be.equal("Charmander");
    });
    it("Debería tener estadísticas", () => {
        const waterPokemon = new WaterPokemon("Charmander", 1, { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 });
        expect(waterPokemon.getStats()).to.be.deep.equal({ hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 });
    });
    it("Devbería tener un nivel", () => {
        const waterPokemon = new WaterPokemon("Charmander", 1, { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 });
        expect(waterPokemon.getLevel()).to.be.equal(1);
    });
    it("Debería subir de nivel", () => {
        const waterPokemon = new WaterPokemon("Charmander", 1, { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 });
        waterPokemon.levelUp();
        expect(waterPokemon.getLevel()).to.be.equal(2);
    });
});