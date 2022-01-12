"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Planet_1 = require("./Planet");
class GasGiant extends Planet_1.Planet {
    constructor(name, size, parentStar, edit, gases) {
        super(name, size, parentStar, edit);
        this.gases = gases;
    }
    // receive a sample gas mixture - private function
    get gasList() {
        return this.gases.join(', ');
    }
}
exports.default = GasGiant;
