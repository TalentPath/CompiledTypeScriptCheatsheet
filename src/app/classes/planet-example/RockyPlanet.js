"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Planet_1 = require("./Planet");
class RockyPlanet extends Planet_1.Planet {
    constructor(name, size, parentStar, edit, coreComponents) {
        super(name, size, parentStar, edit);
        this.coreComponents = coreComponents;
    }
    get coreComp() {
        return this.coreComponents.join(', ');
    }
}
exports.default = RockyPlanet;
