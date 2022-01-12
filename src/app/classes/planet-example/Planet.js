"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planet = void 0;
class Planet {
    constructor(name, size, parentStar, edit) {
        this.name = name;
        this.size = size;
        this.parentStar = parentStar;
        this.edit = edit;
    }
    get planetName() {
        return this.name;
    }
    set newName(newValue) {
        this.name = newValue;
    }
}
exports.Planet = Planet;
Planet.inventoryCount = 2000000000;
Planet.purchasedPlanets = [];
